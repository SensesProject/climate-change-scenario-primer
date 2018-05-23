import l001t0 from './l001t0'
import l005t0 from './l005t0'
import l001t15 from './l001t15'
import l005t15 from './l005t15'

import { csvParse } from 'd3-dsv'

const modelOutput = {
  l001t0: csvParse(l001t0),
  l005t0: csvParse(l005t0),
  l001t15: csvParse(l001t15),
  l005t15: csvParse(l005t15)
}

const variableNames = Object.keys(modelOutput.l001t0[0]).filter(key => key !== 'dummy')

const variables = variableNames.map(variable => {
  const obj = {}
  Object.keys(modelOutput).forEach(scenario => {
    obj[scenario] = modelOutput[scenario].map(d => d[variable])
  })
  const max = Math.max(...Object.keys(modelOutput).map(scenario => {
    return Math.max(...obj[scenario])
  }))
  return {
    variable,
    ...obj,
    max
  }
})

const ied = variables.find(v => v.variable === 'ied')
const iec = variables.find(v => v.variable === 'iec')
ied.max = iec.max = Math.max(ied.max, iec.max)

const ed = variables.find(v => v.variable === 'ed')
const ec = variables.find(v => v.variable === 'ec')
ed.max = ec.max = Math.max(ed.max, ec.max)

const elements = [{
  name: 'Investments',
  variable: 'i',
  x: 2,
  y: 0,
  color: 'green',
  minStep: 1
}, {
  name: 'Dirty Energy',
  variable: 'ied',
  x: 1.3,
  y: 1,
  color: 'green',
  minStep: 2
}, {
  name: 'Clean Energy',
  variable: 'iec',
  x: 2.3,
  y: 1,
  color: 'green',
  minStep: 2
}, {
  name: 'Dirty Energy',
  variable: 'ed',
  x: 1.3,
  y: 2,
  color: 'yellow',
  minStep: 2
}, {
  name: 'Clean Energy',
  variable: 'ec',
  x: 2.3,
  y: 2,
  color: 'yellow',
  minStep: 2
}, {
  name: 'Population',
  variable: 'l',
  x: 0.5,
  y: 3,
  color: 'blue',
  dash: {
    in: false
  }
}, {
  name: 'Energy',
  variable: 'e',
  x: 1.5,
  y: 3,
  color: 'yellow',
  dash: {
    in: 1
  }
}, {
  name: 'Capital Stock',
  variable: 'k',
  x: 2.5,
  y: 3,
  color: 'violet',
  dash: {
    in: 1
  }
}, {
  name: 'GDP',
  variable: 'y',
  x: 1.5,
  y: 4,
  color: 'violet',
  dash: {
    out: 1
  }
}, {
  name: 'Consumption',
  variable: 'c',
  x: 2,
  y: 5,
  color: 'violet',
  minStep: 1,
  dash: {
    out: false
  }
}, {
  name: 'Emissions',
  variable: 'ed',
  x: 0.5,
  y: 5,
  color: 'red',
  minStep: 2,
  dash: {
    out: false
  }
}]

const lines = [{
  points: [
    [0.5, 4],
    [1.5, 4]
  ],
  color: 'blue'
}, {
  points: [
    [1.5, 4],
    [2.5, 4]
  ],
  color: 'violet'
}, {
  points: [
    [1.5, 5],
    [2, 5]
  ],
  color: 'violet',
  minStep: 1
}, {
  points: [
    [2, 'min'],
    ['max', 'min'],
    ['max', 5],
    [2, 5]
  ],
  color: 'green',
  minStep: 1
}, {
  points: [
    [1.5, 3],
    [1.5, 1],
    [2.5, 1],
    [2.5, 3]
  ],
  color: 'green',
  minStep: 1,
  maxStep: 1
}, {
  points: [
    [1.3, 1],
    [2.9, 1],
    [2.9, 3],
    [2.5, 3]
  ],
  color: 'green',
  minStep: 2
}, {
  points: [
    [1.3, 3],
    [2.3, 3]
  ],
  color: 'yellow',
  minStep: 2
}, {
  points: [
    [1.3, 3],
    ['min', 3],
    ['min', 5],
    [0.5, 5]
  ],
  color: 'red',
  minStep: 2
}]

export default {
  modelOutput,
  elements: elements.map(element => {
    return {
      ...element,
      data: variables.find(variable => variable.variable === element.variable)
    }
  }),
  lines
}
