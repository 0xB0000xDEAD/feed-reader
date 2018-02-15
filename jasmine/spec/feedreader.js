/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */
/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(
  (function() {
    /* This is our first test suite - a test suite just contains
     * a related set of tests. This suite is all about the RSS
     * feeds definitions, the allFeeds variable in our application.
     */
    describe('RSS Feeds', function() {
      /* This is our first test - it tests to make sure that the
       * allFeeds variable has been defined and that it is not
       * empty. Experiment with this before you get started on
       * the rest of this project. What happens when you change
       * allFeeds in app.js to be an empty array and refresh the
       * page?
       */
      it('are defined', function() {
        expect(allFeeds).toBeDefined();
        expect(allFeeds.length).not.toBe(0);
      });
      /* TODO: Write a test that loops through each feed
       * in the allFeeds object and ensures it has a URL defined
       * and that the URL is not empty.
       */
      it('has all the Url defined and not empty', function() {
        // regex expression to validate url. Diego Perini regex from https://mathiasbynens.be/demo/url-regex
        const regex = new RegExp('^' +
          // protocol identifier
          '(?:(?:https?|ftp)://)' +
          // user:pass authentication
          '(?:\\S+(?::\\S*)?@)?' + '(?:' +
          // IP address exclusion
          // private & local networks
          '(?!(?:10|127)(?:\\.\\d{1,3}){3})' + '(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})' + '(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})' +
          // IP address dotted notation octets
          // excludes loopback network 0.0.0.0
          // excludes reserved space >= 224.0.0.0
          // excludes network & broacast addresses
          // (first & last IP address of each class)
          '(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])' + '(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}' + '(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))' + '|' +
          // host name
          '(?:(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)' +
          // domain name
          '(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*' +
          // TLD identifier
          '(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))' +
          // TLD may end with dot
          '\\.?' + ')' +
          // port number
          '(?::\\d{2,5})?' +
          // resource path
          '(?:[/?#]\\S*)?' + '$', 'i');
        allFeeds.forEach((e) => {
          // console.log(e.url);
          expect(e.url).toBeDefined();
          expect(e.url).toMatch(regex);
        });
      });
      /* TODO: Write a test that loops through each feed
       * in the allFeeds object and ensures it has a name defined
       * and that the name is not empty.
       */
      it('has a non empty name', function() {
        allFeeds.forEach((e) => {
          expect(e.name).toBeDefined();
        });
      });
    });
    /* TODO: Write a new test suite named "The menu" */
    describe('The Menu', function() {
      /* TODO: Write a test that ensures the menu element is
       * hidden by default. You'll have to analyze the HTML and
       * the CSS to determine how we're performing the
       * hiding/showing of the menu element.
       */
      it('is closed at default', function() {
        const bodyClass = $('body')[0].className;
        //check the default status of the menu
        expect(bodyClass).toBe('menu-hidden');
      });
      /* TODO: Write a test that ensures the menu changes
       * visibility when the menu icon is clicked. This test
       * should have two expectations: does the menu display when
       * clicked and does it hide when clicked again.
       */
      it('hamburger shows and hides the menu', function() {
        const menuIcon = $('.menu-icon-link');
        spyOn(menuIcon, 'click').and.callThrough();
        menuIcon.click();
        // check if  click() is actually called
        expect(menuIcon.click).toHaveBeenCalled();
        //check if the hiding class is removed
        expect($('body')[0].className).toBe('');
        menuIcon.click();
        //check if the hiding class is restored
        expect($('body')[0].className).toBe('menu-hidden');
      });
    });
    /* TODO: Write a new test suite named "Initial Entries" */
    describe('Initial Entries', function() {
      /* TODO: Write a test that ensures when the loadFeed
       * function is called and completes its work, there is at least
       * a single .entry element within the .feed container.
       * Remember, loadFeed() is asynchronous so this test will require
       * the use of Jasmine's beforeEach and asynchronous done() function.
       */
      beforeEach(function(done) {
        loadFeed(0, function() {
          done();
        });
      });
      const container = $('.feed');
      it('loaded at least one link', function(done) {
        //check if there is one link o more after loadFeed()
        expect(container[0].children.length).toBeGreaterThan(0);
        done();
      });
    });
    /* TODO: Write a new test suite named "New Feed Selection" */
    describe('New Feed Selection', function() {
      /* TODO: Write a test that ensures when a new feed is loaded
       * by the loadFeed function that the content actually changes.
       * Remember, loadFeed() is asynchronous.
       */
      beforeEach(function(done) {
        loadFeed(0, () => {
          /** the arrow function help with the hit the right this, so firstArticle and feedLink can be passed
              to the it().
          **/
          this.firstArticle = document.getElementsByClassName('entry-link')[0].href;
          this.feedLink = document.getElementsByClassName('header-title')[0].innerText;
          console.log(this.feedLink);
          console.log(this.firstArticle);
          //fake a new feed loading  3th element in allFeeds
          loadFeed(2, function() {
            done();
          });
        });
      });
      it('the content change when a new feed is loaded', function(done) {
        const firstArticle = document.getElementsByClassName('entry-link')[0].href;
        const feedLink = document.getElementsByClassName('header-title')[0].innerText;
        // check both the feed link and the first article loaded against the old one
        expect(firstArticle).not.toBe(this.firstArticle);
        expect(feedLink).not.toBe(this.feedLink);
        done();
      });
    });
  })());
