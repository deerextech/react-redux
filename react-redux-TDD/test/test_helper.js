import _$ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import jsdom from 'jsdom';
import chai, { expect } from 'chai';
import chaiJquery from 'chai-jquery';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from '../src/reducers'; // future reducers file.

//Set up testing environment to run like a browser in the command line
//make fake browser. (global.document === window.document in the browser);
// assign it to document, and put in html skeleton.
//initializes and sets up fake browser for use @ commandline.
global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
//return window obj associated w/ document. ^^^^
global.window = global.document.defaultView;

//reference Navigator obj.
global.navigator = global.window.navigator;

// _$ instead of just $ because $ reaches to browser and find DOM and will fail.
// tell jquery make use of window provided not the browser.
const $ = _$(global.window); //just be responsible for global.window set up by jsDom.

/* End of fake DOM. */

//set up chai jquery.
chaiJquery(chai, chai.util, $);

// build 'renderComponent' helper that should render given react class
function renderComponent(ComponentClass, props = {}, state = {}) {
  //ComponentClass refers to component class build (ex. CommentBox extends Component)
  //make instance of said class (below)
  //renderIntoDocument requires DOM, need react-dom library.
  const componentInstance =  TestUtils.renderIntoDocument(
  // probably going to need to wrap this in Provider once reducers come into play....
    <ComponentClass {...props} />

  );
  //find & return DOM node.
  //ReactDOM.findDOMNode gives reference to html
  //wrapped in jQuery to connect it to helpers from jQuery Chai.
  return $(ReactDOM.findDOMNode(componentInstance));
}

// helper for simulating events
$.fn.simulate = function(eventName, value) {
  //works with jquery el & takes event name & value from simulate events.
  //$.fn. every jquery instance will have access to simulate function.
  if (value) {
    //this gives reference to element that is selected (and use it to get its value and val to set it.)
    this.val(value);
  }
  //takes event name & element it is called on.
  //reference object property so it can take whatever event happens.
  TestUtils.Simulate[eventName](this[0]);
};

//export to use in test suites.
export {renderComponent, expect};


//mocha: Runs the tests: load tests, run them one by one, clean up after each
//chai: helpers for asserting certain properties about test subjects.
