# Climate Change Scenario Primer

> Interactive introduction into climate change scenarios

## Build Setup

``` bash
# install dependencies
$ npm install # Or yarn

# serve with hot reload at http://localhost:3000/primer-legacy/
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate
# remove <base… in all index.html files (it breaks some svgs in safari and paths are absolute anyways)
sed -i '' 's/<base href="\/primer-legacy\/">//g' dist/index.html & sed -i '' 's/<base href="\/primer-legacy\/">//g' dist/*/index.html
```

For detailed explanation on how things work, checkout the [Nuxt.js docs](https://github.com/nuxt/nuxt.js).
