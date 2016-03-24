// Import the page-mod API
var pageMod = require('sdk/page-mod');

// Create a page-mod
pageMod.PageMod({
  include: [
    "http://github.com/*",
    "https://github.com/*",
  ],
  contentScriptFile: [
    './script.js',
  ],
  contentStyleFile: [
    './style.css',
  ],
});
