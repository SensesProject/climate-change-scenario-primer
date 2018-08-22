<template>
  <div class="Map">
    <div
      :id="mapId"
      :class="{showMap}"
      class="map"/>
  </div>
</template>

<script>
import * as d3 from 'd3-scale'
import * as chromatic from 'd3-scale-chromatic'
import proj4 from 'proj4'

let ol = null
if (process.browser) {
  ol = require('~/plugins/ol')
}

const Robinson = '+proj=robin +lon_0=0 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs'
proj4.defs('EPSG:54030', Robinson)
const LV95 = '+proj=somerc +lat_0=46.95240555555556 +lon_0=7.439583333333333 +k_0=1 +x_0=2600000 +y_0=1200000 +ellps=bessel +towgs84=674.374,15.056,405.346,0,0,0,0 +units=m +no_defs'
proj4.defs('EPSG:2056', LV95)
proj4.defs('EPSG:23032', '+proj=utm +zone=32 +ellps=intl +towgs84=-87,-98,-121,0,0,0,0 +units=m +no_defs')
// proj4.defs('EPSG:2163', '+proj=laea +lat_0=45 +lon_0=-100 +x_0=0 +y_0=0 +a=6370997 +b=6370997 +units=m +no_defs')

export default {
  props: {
    projection: {
      type: String,
      default: 'EPSG:3857'
    },
    static: {
      type: Boolean,
      default: false
    },
    reprojectGrid: {
      type: Boolean,
      default: false
    },
    grid: {
      type: Object,
      default: null
    },
    colorScale: {
      type: String,
      default: 'interpolateMagma'
    },
    borders: {
      type: Boolean,
      default: true
    },
    straightParallels: {
      type: Boolean,
      default: true
    },
    invertScale: {
      type: Boolean,
      default: false
    },
    mapId: {
      type: String,
      default: 'map'
    }
  },
  data () {
    return {
      showMap: false,
      lowRes: null,
      highRes: null,
      countries: null,
      map: process.browser ? new ol.Map({
        controls: [],
        interaction: ol.interaction.defaults({altShiftDragRotate: false, pinchRotate: false, shiftDragZoom: false})
      }) : null,
      extents: {
        'EPSG:4326': [-180, -90, 180, 90],
        'EPSG:3857': [-20026376.39, -20048966.10, 20026376.39, 20048966.10],
        'EPSG:54030': [-28000000, -9000000, 28000000, 9000000],
        'EPSG:2056': [2485071.58, 1075346.31, 2828515.82, 1299941.79],
        // 'EPSG:2163': [-8040784.5135, -2577524.9210, 3668901.4484, 4785105.1096],
        'EPSG:23032': [-1206118.71, 4021309.92, 1295389.00, 8051813.28]
      },
      alternativeExtents: {
        'EPSG:54030': [-17100000, -9000000, 17100000, 9000000]
      },
      timeOut: null
    }
  },
  watch: {
    projection () {
      this.initMap()
    },
    reprojectGrid () {
      this.initMap()
    },
    colorScale () {
      this.highRes.getSource().changed()
      this.lowRes.setSource(this.prerender())
    },
    straightParallels () {
      this.initMap()
    },
    invertScale () {
      this.initMap()
    },
    grid () {
      this.highRes.getSource().changed()
      this.lowRes.setSource(this.prerender())
    },
    borders (value) {
      if (value) this.map.addLayer(this.countries)
      else this.map.removeLayer(this.countries)
    },
    static: {
      handler (value) {
        if (!process.browser) return
        this.map.getInteractions().forEach(interaction => {
          if (
            interaction instanceof ol.interaction.DoubleClickZoom ||
            interaction instanceof ol.interaction.KeyboardPan ||
            interaction instanceof ol.interaction.KeyboardZoom ||
            interaction instanceof ol.interaction.MouseWheelZoom ||
            interaction instanceof ol.interaction.DragPan ||
            interaction instanceof ol.interaction.PinchZoom
          ) {
            interaction.setActive(!value)
          }
        })
      },
      immediate: true
    }
  },
  mounted () {
    if (!process.browser) return
    ol.register(proj4)
    this.map.setTarget(this.mapId)
    this.initMap()

    addEventListener('resize', this.resize, false)
  },
  methods: {
    resize () {
      this.timeOut = setTimeout(() => {
        this.highRes.getSource().changed()
        if (this.static) {
          const viewExtent = this.alternativeExtents[this.projection] || this.extents[this.projection]
          this.map.getView().fit(viewExtent, {constrainResolution: false})
        } else {
          this.lowRes.setSource(this.prerender())
        }
      }, 100)
    },
    initMap () {
      if (!process.browser) return
      this.map.removeLayer(this.lowRes)
      this.map.removeLayer(this.highRes)
      this.map.removeLayer(this.countries)

      const imageExtent = this.extents[this.projection]
      const projection = ol.getProjection(this.projection)

      projection.setExtent(imageExtent)

      const view = new ol.View({
        projection
      })
      this.map.setView(view)
      const viewExtent = this.alternativeExtents[this.projection] || this.extents[this.projection]
      view.fit(viewExtent, {constrainResolution: false})

      if (!this.static) {
        this.lowRes = new ol.ImageLayer({
          source: this.prerender(),
          preload: Infinity
        })
      }

      this.highRes = new ol.ImageLayer({
        source: new ol.ImageCanvasSource({
          canvasFunction: this.createCanvas,
          projection: this.reprojectGrid ? 'EPSG:4326' : this.projection
        })
      })

      this.countries = new ol.VectorLayer({
        source: new ol.VectorSource({
          url: '/primer/world-110m.json',
          format: new ol.TopoJSON({
            // don't want to render the full world polygon (stored as 'land' layer),
            // which repeats all countries
            layers: ['land']
          }),
          overlaps: false
        }),
        style: new ol.Style({
          stroke: new ol.Stroke({
            color: [0, 0, 0, 0.5],
            width: 1
          })
        })
      })

      if (!this.static) this.map.addLayer(this.lowRes)
      this.map.addLayer(this.highRes)
      if (this.borders) this.map.addLayer(this.countries)
      this.highRes.getSource().changed()
      this.$nextTick(() => { this.showMap = true })
    },
    createCanvas (extent, resolution, pixelRatio, size, proj) {
      const canvas = document.createElement('canvas')
      canvas.setAttribute('width', size[0])
      canvas.setAttribute('height', size[1])
      const ctx = canvas.getContext('2d')

      const scale = d3.scaleSequential(chromatic[this.colorScale])
        .domain(this.grid.domain)

      if (this.invertScale) scale.domain(this.grid.domain.map(v => v).reverse())

      const p1 = ol.transform([this.extents[this.projection][0], this.extents[this.projection][1]], proj.code_, 'EPSG:4326')
      const p2 = ol.transform([this.extents[this.projection][2], this.extents[this.projection][3]], proj.code_, 'EPSG:4326')
      const transformedExtend = [Math.max(Math.floor(p1[0]), -180), Math.max(Math.floor(p1[1]), -90), Math.min(Math.ceil(p2[0]), 180), Math.min(Math.ceil(p2[1]), 90)]

      for (let y = transformedExtend[1]; y <= transformedExtend[3]; y += 0.5) {
        for (let x = transformedExtend[0]; x < transformedExtend[2]; x += 0.5) {
          const xAccessor = x * 2 + 360
          const yAccessor = y * 2 - 180 + 1
          const line = this.grid.grid[0][(this.grid.grid[0].length - yAccessor) % this.grid.grid[0].length]
          const charcode = line.charCodeAt(xAccessor)

          let x2 = x + 0.5
          const y2 = y + 0.5

          if (this.straightParallels) {
            while (charcode === line.charCodeAt(x2 * 2 + 360)) {
              x2 += 0.5
            }
          }

          const value = this.charcodeToValue(charcode)
          if (value === -1) {
            ctx.fillStyle = '#000000'
          } else {
            ctx.fillStyle = scale(value)
          }
          // const rect = this.reproject(extent, size, [...ol.transform([x, y], 'EPSG:4326', proj.code_), ...ol.transform([x + 0.5, y + 0.5], 'EPSG:4326', proj.code_)])
          // ctx.fillRect(...rect)
          ctx.beginPath()
          ctx.moveTo(...this.reprojectPoint(extent, size, ol.transform([x, y], 'EPSG:4326', proj.code_), [-1, 1]))
          ctx.lineTo(...this.reprojectPoint(extent, size, ol.transform([x2, y], 'EPSG:4326', proj.code_), [1, 1]))
          ctx.lineTo(...this.reprojectPoint(extent, size, ol.transform([x2, y2], 'EPSG:4326', proj.code_), [1, -1]))
          ctx.lineTo(...this.reprojectPoint(extent, size, ol.transform([x, y2], 'EPSG:4326', proj.code_), [-1, -1]))
          ctx.fill()

          x = x2 - 0.5
        }
      }
      return canvas
    },
    reproject (extent, size, origin) {
      const x1 = (origin[0] - extent[0]) / (extent[2] - extent[0]) * size[0] - 1
      const y1 = (origin[1] - extent[3]) / (extent[1] - extent[3]) * size[1] - 1
      return [
        x1,
        y1,
        (origin[2] - extent[0]) / (extent[2] - extent[0]) * size[0] - x1 + 2,
        (origin[3] - extent[3]) / (extent[1] - extent[3]) * size[1] - y1 - 2
      ]
    },
    reprojectPoint (extent, size, origin, offset) {
      const x = (origin[0] - extent[0]) / (extent[2] - extent[0]) * size[0] + offset[0]
      const y = (origin[1] - extent[3]) / (extent[1] - extent[3]) * size[1] + offset[1]
      return [x, y]
    },
    charcodeToValue (code) {
      if (code >= 93) code--
      if (code >= 35) code--
      return code - 33
    },
    prerender () {
      const imageExtent = this.extents[this.projection]
      return new ol.Static({
        url: this.createCanvas(imageExtent, null, 2, [2000, 1000], {code_: this.projection}).toDataURL(),
        crossOrigin: '',
        projection: this.projection,
        imageExtent: imageExtent
      })
    }
  }
}
</script>

<style scoped>
.Map {
  width: 100%;
  height: 100%;
}

.map {
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity .4s;
}

.map.showMap {
  opacity: 1;
}
</style>
