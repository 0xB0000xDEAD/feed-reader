# Feed Reader

## Table of Contents
* [What's this?](What's\ this?)
* [Setup](Setup)
* [Testing](Testing)

## What's this?

A minimal feed reader based on the Google API. RSS feeds are parsed as JSON object.

To personalize the feeds change the content of allFeeds array in [app.js](feed\ reader/js/app.js)
## Setup

Download and extract the zip file.
This is the folder structure:

- __feed reader__
  - [README.md](feed\ reader/README.md)
  - [index.html](feed\ reader/index.html)
  - __jasmine__
    - __lib__
      - __jasmine-2.1.2__
        - [boot.js](feed\ reader/jasmine/lib/jasmine-2.1.2/boot.js)
        - [console.js](feed\ reader/jasmine/lib/jasmine-2.1.2/console.js)
        - [jasmine-html.js](feed\ reader/jasmine/lib/jasmine-2.1.2/jasmine-html.js)
        - [jasmine.css](feed\ reader/jasmine/lib/jasmine-2.1.2/jasmine.css)
        - [jasmine.js](feed\ reader/jasmine/lib/jasmine-2.1.2/jasmine.js)
        - [jasmine_favicon.png](feed\ reader/jasmine/lib/jasmine-2.1.2/jasmine_favicon.png)
    - __spec__
      - [feedreader.js](feed\ reader/jasmine/spec/feedreader.js)
  - __fonts__
    - [icomoon.eot](feed\ reader/fonts/icomoon.eot)
    - [icomoon.svg](feed\ reader/fonts/icomoon.svg)
    - [icomoon.ttf](feed\ reader/fonts/icomoon.ttf)
    - [icomoon.woff](feed\ reader/fonts/icomoon.woff)
  - __js__
    - [app.js](feed\ reader/js/app.js)
  - __css__
    - [icomoon.css](feed\ reader/css/icomoon.css)
    - [style.css](feed\ reader/css/style.css)
    - [normalize.css](feed\ reader/css/normalize.css)



Open the [index.html](feed\ reader/index.html) file in your browser.

## Testing

Based on **jasmine 2.1.2**

Please see  _comments_ in the [Jasmine Spec file](feed\ reader/jasmine/spec/feedreader.js) to understand the testing performed.
