import csv from './modeldata'

import { csvParse } from 'd3-dsv'

const data = csvParse(csv)
const variableNames = Object.keys(data[0]).filter(key => key !== 'dummy')
// const variableNames = Object.keys(modelOutput.l001t0[0]).filter(key => key !== 'dummy')

const variables = variableNames.map(variable => {
  const obj = {}
  data.forEach(row => {
    if (obj[row.scenario] === undefined) obj[row.scenario] = []
    obj[row.scenario].push(row[variable])
    // obj[scenario] = modelOutput[scenario].map(d => d[variable]).filter((d, i) => i < 10)
  })
  const max = Math.max(...data.map(row => row[variable]))
  return {
    variable,
    ...obj,
    max
  }
})

const ied = variables.filter(v => v.variable === 'ied')[0]
const iec = variables.filter(v => v.variable === 'iec')[0]
ied.max = iec.max = Math.max(ied.max, iec.max)

const ed = variables.filter(v => v.variable === 'ed')[0]
const ec = variables.filter(v => v.variable === 'ec')[0]
ed.max = ec.max = Math.max(ed.max, ec.max)

const elements = [{
//   name: 'Investments',
//   variable: 'i',
//   x: 2,
//   y: 0,
//   color: 'blue',
//   minStep: 1
// }, {
//   name: 'Dirty Energy',
//   variable: 'ied',
//   x: 1.3,
//   y: 1,
//   color: 'blue',
//   minStep: 2
// }, {
//   name: 'Clean Energy',
//   variable: 'iec',
//   x: 2.3,
//   y: 1,
//   color: 'blue',
//   minStep: 2
// }, {
//   name: 'Dirty Energy',
//   variable: 'ed',
//   x: 1.3,
//   y: 2,
//   color: 'yellow',
//   minStep: 2
// }, {
//   name: 'Clean Energy',
//   variable: 'ec',
//   x: 2.3,
//   y: 2,
//   color: 'yellow',
//   minStep: 2
// }, {
  name: 'Labor',
  variable: 'l',
  x: 0.5,
  y: 0,
  color: 'green',
  dash: {
    in: false
  }
}, {
  name: 'Energy',
  variable: 'e',
  x: 1.5,
  y: 0,
  color: 'yellow',
  dash: {
    in: 1
  }
}, {
  name: 'Capital Stock',
  variable: 'k',
  x: 2.5,
  y: 0,
  color: 'blue',
  dash: {
    in: 1
  }
}, {
  name: 'GDP',
  variable: 'y',
  x: 1.5,
  y: 1,
  color: 'blue'
}, {
  name: 'Consumption',
  variable: 'c',
  x: 0.5,
  y: 2,
  color: 'blue',
  minStep: 0,
  dash: {
    out: false
  }
}, {
  name: 'Investments',
  variable: 'i',
  x: 2,
  y: 2,
  color: 'blue'
}, {
  name: 'Labor',
  variable: 'l',
  x: 0.5,
  y: 3,
  color: 'green',
  dash: {
    in: false
  }
}, {
  name: 'Energy',
  variable: 'e',
  x: 1.5,
  y: 3,
  color: 'yellow'
}, {
  name: 'Capital Stock',
  variable: 'k',
  x: 2.5,
  y: 3,
  color: 'blue'
}, {
  name: 'GDP',
  variable: 'y',
  x: 1.5,
  y: 4,
  color: 'blue'
}, {
  name: 'Consumption',
  variable: 'c',
  x: 0.5,
  y: 5,
  color: 'blue',
  minStep: 0,
  dash: {
    out: false
  }
}, {
  name: 'Investments',
  variable: 'i',
  x: 2,
  y: 5,
  color: 'blue'
}, {
  name: 'Labor',
  variable: 'l',
  x: 0.5,
  y: 7,
  color: 'green',
  dash: {
    in: false
  }
}, {
  name: 'Energy',
  variable: 'e',
  x: 1.5,
  y: 7,
  color: 'yellow'
}, {
  name: 'Capital Stock',
  variable: 'k',
  x: 2.5,
  y: 7,
  color: 'blue'
}, {
  name: 'GDP',
  variable: 'y',
  x: 1.5,
  y: 8,
  color: 'blue',
  off: true
}, {
  name: 'Dirty Energy',
  variable: 'ed',
  x: 1,
  y: 6,
  color: 'yellow'
}, {
  name: 'Clean Energy',
  variable: 'ec',
  x: 2,
  y: 6,
  color: 'yellow'
}, {
  name: 'Emissions',
  variable: 'ed',
  x: 0.5,
  y: 8,
  color: 'red',
  off: true,
  dash: {
    out: false
  }
}]

const lines = [{
  points: [
    [0.5, 1],
    [1.5, 1]
  ],
  color: 'green'
}, {
  points: [
    [1.5, 1],
    [2.5, 1]
  ],
  color: 'blue'
}, {
  points: [
    [1.5, 2],
    ['max', 2],
    ['max', 2, 'next'],
    [0.5, 2, 'next']
  ],
  color: 'blue'
}, {
  points: [
    [1.5, 3],
    [2.5, 3]
  ],
  color: 'blue'
}, {
  points: [
    [0.5, 4],
    [1.5, 4]
  ],
  color: 'green'
}, {
  points: [
    [1.5, 4],
    [2.5, 4]
  ],
  color: 'blue'
}, {
  points: [
    [1.5, 5],
    ['max', 5],
    ['max', 5, 'next']
  ],
  color: 'blue',
  maxStep: 0
}, {
  points: [
    ['max', 5, 'next'],
    [0.5, 5, 'next']
  ],
  color: 'blue'
}, {
  points: [
    [1, 6],
    [2.5, 6],
    [2.5, 7]
  ],
  color: 'blue'
}, {
  points: [
    [1, 7],
    ['min', 7],
    ['min', 8, 'off'],
    [0.5, 8, 'off']
  ],
  color: 'red'
}, {
  points: [
    [1, 7],
    [2, 7]
  ],
  color: 'yellow'
}, {
  points: [
    [0.5, 8],
    [1.5, 8]
  ],
  color: 'green'
}, {
  points: [
    [1.5, 8],
    [2.5, 8]
  ],
  color: 'blue'
}, {
  points: [
    [1.5, 8],
    [1.5, 8, 'off']
  ],
  color: 'blue'
}, {
  points: [
    [1.5, 9, 'off'],
    ['max', 9, 'off'],
    ['max', 5, 'next']
  ],
  color: 'blue',
  minStep: 1
}, {
  points: [
    [1.5, 5],
    ['max', 5],
    ['max', 2, 'next']
  ],
  color: 'blue',
  minStep: 1
}, {
  points: [
    [1.5, 3, 'off'],
    [1.5, 3]
  ],
  color: 'blue'
}, {
  points: [
    [1, 6, 'off'],
    [1, 6],
    [2, 6],
    [2, 6, 'off']
  ],
  color: 'blue'
}

// }, {
//   points: [
//     [1.5, 5],
//     [2, 5]
//   ],
//   color: 'blue',
//   minStep: 1
// }, {
//   points: [
//     [2, 'min'],
//     ['max', 'min'],
//     ['max', 5],
//     [2, 5]
//   ],
//   color: 'blue',
//   minStep: 1
// }, {
//   points: [
//     [1.5, 3],
//     [1.5, 1],
//     [2.5, 1],
//     [2.5, 3]
//   ],
//   color: 'blue',
//   minStep: 1,
//   maxStep: 1
// }, {
//   points: [
//     [1.3, 1],
//     [2.9, 1],
//     [2.9, 3],
//     [2.5, 3]
//   ],
//   color: 'blue',
//   minStep: 2
// }, {
//   points: [
//     [1.3, 3],
//     [2.3, 3]
//   ],
//   color: 'yellow',
//   minStep: 2
// }, {
//   points: [
//     [1.3, 3],
//     ['min', 3],
//     ['min', 5],
//     [0.5, 5]
//   ],
//   color: 'red',
//   minStep: 2
]

export default {
  elements: elements.map(element => {
    return {
      ...element,
      data: variables.filter(variable => variable.variable === element.variable)[0]
    }
  }),
  lines
}
