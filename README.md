

# How will I complete this project?

Review the Feed Reader Testing [Project Rubric](https://review.udacity.com/#!/projects/3442558598/rubric)

1. Take the JavaScript Testing [course](https://www.udacity.com/course/ud549)
2. Download the [required project assets](http://github.com/udacity/frontend-nanodegree-feedreader).
3. Review the functionality of the application within your browser.
4. Explore the application's HTML (**./index.html**), CSS (**./css/style.css**) and JavaScript (**./js/app.js**) to gain an understanding of how it works.
5. Explore the Jasmine spec file in **./jasmine/spec/feedreader.js** and review the [Jasmine documentation](http://jasmine.github.io).
6. Edit the `allFeeds` variable in **./js/app.js** to make the provided test fail and see how Jasmine visualizes this failure in your application.
7. Return the `allFeeds` variable to a passing state.
8. Write a test that loops through each feed in the `allFeeds` object and ensures it has a URL defined and that the URL is not empty.
9. Write a test that loops through each feed in the `allFeeds` object and ensures it has a name defined and that the name is not empty.
10. Write a new test suite named `"The menu"`.
11. Write a test that ensures the menu element is hidden by default. You'll have to analyze the HTML and the CSS to determine how we're performing the hiding/showing of the menu element.
12. Write a test that ensures the menu changes visibility when the menu icon is clicked. This test should have two expectations: does the menu display when clicked and does it hide when clicked again.
13. Write a test suite named `"Initial Entries"`.
14. Write a test that ensures when the `loadFeed` function is called and completes its work, there is at least a single `.entry` element within the `.feed` container.
15. Write a test suite named `"New Feed Selection"`.
16. Write a test that ensures when a new feed is loaded by the `loadFeed` function that the content actually changes.
17. No test should be dependent on the results of another.
18. Callbacks should be used to ensure that feeds are loaded before they are tested.
19. Implement error handling for undefined variables and out-of-bound array access.
20. When complete - all of your tests should pass.
21. Write a README file detailing all steps required to successfully run the application. If you have added additional tests (for Udacious Test Coverage),  provide documentation for what these future features are and what the tests are checking for.


# Feed Reader

## Table of Contents
* [What's this?](What's\ this?)
* [Setup](Setup)
* [Testing](Testing)

## What's this?

A minimal feed reader based on the Google API
RSS feeds are parsed as JSON object.

To personalize the feeds change the content of allFeeds array in [app.js](feed reader/js/app.js)
## Setup

Download and extract the zip file.
This is the folder structure:

- __feed reader__
  - [README.md](feed reader/README.md)
  - [index.html](feed reader/index.html)
  - __jasmine__
    - __lib__
      - __jasmine-2.1.2__
        - [boot.js](feed reader/jasmine/lib/jasmine-2.1.2/boot.js)
        - [console.js](feed reader/jasmine/lib/jasmine-2.1.2/console.js)
        - [jasmine-html.js](feed reader/jasmine/lib/jasmine-2.1.2/jasmine-html.js)
        - [jasmine.css](feed reader/jasmine/lib/jasmine-2.1.2/jasmine.css)
        - [jasmine.js](feed reader/jasmine/lib/jasmine-2.1.2/jasmine.js)
        - [jasmine_favicon.png](feed reader/jasmine/lib/jasmine-2.1.2/jasmine_favicon.png)
    - __spec__
      - [feedreader.js](feed reader/jasmine/spec/feedreader.js)
  - __fonts__
    - [icomoon.eot](feed reader/fonts/icomoon.eot)
    - [icomoon.svg](feed reader/fonts/icomoon.svg)
    - [icomoon.ttf](feed reader/fonts/icomoon.ttf)
    - [icomoon.woff](feed reader/fonts/icomoon.woff)
  - __js__
    - [app.js](feed reader/js/app.js)
  - __css__
    - [icomoon.css](feed reader/css/icomoon.css)
    - [style.css](feed reader/css/style.css)
    - [normalize.css](feed reader/css/normalize.css)



Open the [index.html](feed\ reader/index.html) file in your browser. Play ;-)

## Testing

Based on **jasmine 2.1.2**

Please see  _comments_ in the [Jasmine Spec file](feed\ reader/jasmine/spec/feedreader.js) to understand the testing performed.
