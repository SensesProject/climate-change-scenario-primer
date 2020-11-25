import data from './fingerprint-src.json'

const xRange = [Math.min(...data.map(p => p.x)), Math.max(...data.map(p => p.x))]
const yRange = [Math.min(...data.map(p => p.y)), Math.max(...data.map(p => p.y))]

function xScale (value) {
  return (value - xRange[0]) / (xRange[1] - xRange[0])
}

function yScale (value) {
  return (value - yRange[0]) / (xRange[1] - xRange[0])
}

data.filter(filterSelectedNodes).forEach((d, i) => {
  d.selectedId = i > 12 ? i + 3 : i
  d.color = d.category === 'Electricity and Heat' ? 'yellow' : 'red'
})

export default data.map(d => ({
  ...d,
  x: xScale(d.x),
  y: yScale(d.y)
}))

function filterSelectedNodes (d) {
  if (d.category !== 'Climate and Non-Climate Environmental Change' && d.category !== 'Electricity and Heat') return false
  if (d.name.match(/ to /)) return false
  if (d.name.match(/Trade/)) return false
  if (d.name.match(/Electrolysis/)) return false
  if (d.name.match(/Heat/)) return false
  if (d.name.match(/Source based/)) return false
  if (d.name.match(/Forcing/)) return false
  if (d.name.match(/Ocean/)) return false
  if (d.name.match(/Sea/)) return false
  if (d.name.match(/Temperature/)) return false
  return true
}
