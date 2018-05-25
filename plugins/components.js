import Vue from 'vue'

import LayoutHeader from '~/components/LayoutHeader'
import LayoutNextChapter from '~/components/LayoutNextChapter'
import LayoutScrollify from '~/components/LayoutScrollify'
import LayoutListItem from '~/components/LayoutListItem'
import LayoutColumns from '~/components/LayoutColumns'
import LayoutCards from '~/components/LayoutCards'
import LayoutCard from '~/components/LayoutCard'

import VisSsp from '~/components/VisSsp'
import VisCycle from '~/components/VisCycle'
import VisSspComparison from '~/components/VisSspComparison'
import VisIamStructure from '~/components/VisIamStructure'
import VisIamStructureChart from '~/components/VisIamStructureChart'
import VisFingerprints from '~/components/VisFingerprints'
import VisChart from '~/components/VisChart'

import InHighlight from '~/components/InHighlight'

import TestScrollify from '~/components/TestScrollify'

import { ResizeObserver } from 'vue-resize'

Vue.component('LayoutHeader', LayoutHeader)
Vue.component('LayoutNextChapter', LayoutNextChapter)
Vue.component('LayoutScrollify', LayoutScrollify)
Vue.component('LayoutListItem', LayoutListItem)
Vue.component('LayoutColumns', LayoutColumns)
Vue.component('LayoutCards', LayoutCards)
Vue.component('LayoutCard', LayoutCard)

Vue.component('VisSsp', VisSsp)
Vue.component('VisCycle', VisCycle)
Vue.component('VisSspComparison', VisSspComparison)
Vue.component('VisIamStructure', VisIamStructure)
Vue.component('VisIamStructureChart', VisIamStructureChart)
Vue.component('VisFingerprints', VisFingerprints)
Vue.component('VisChart', VisChart)

Vue.component('InHighlight', InHighlight)

Vue.component('TestScrollify', TestScrollify)

Vue.component('ResizeObserver', ResizeObserver)
