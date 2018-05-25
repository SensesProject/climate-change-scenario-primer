import gdp from './gdp'
import population from './population'
import carbonSsp1 from './carbonSsp1'
import carbonSsp5 from './carbonSsp5'
import emissions from './emissions'
import finalenergy from './finalenergy'

import { csvParse } from 'd3-dsv'
export default {
  gdp: csvParse(gdp),
  population: csvParse(population),
  carbonSsp1: csvParse(carbonSsp1),
  carbonSsp5: csvParse(carbonSsp5),
  emissions: csvParse(emissions),
  finalenergy: csvParse(finalenergy)
}
