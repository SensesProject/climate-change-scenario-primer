import chapters from '~/assets/data/chapters'

const state = () => (chapters.map(chapter => ({
  ...chapter,
  path: chapter.path || `/${chapter.title.toLowerCase().replace(/ /g, '-')}`
})))

export default { state }
