const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/home/mb/Documents/projects/aasgard/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/home/mb/Documents/projects/aasgard/src/pages/404.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/home/mb/Documents/projects/aasgard/src/pages/index.js"))),
  "component---src-pages-misc-js": hot(preferDefault(require("/home/mb/Documents/projects/aasgard/src/pages/misc.js"))),
  "component---src-pages-projects-js": hot(preferDefault(require("/home/mb/Documents/projects/aasgard/src/pages/projects.js")))
}

