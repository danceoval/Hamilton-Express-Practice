'use strict';
/*
  Sets up randomized Instructor/Campus database
*/
var _ = require('lodash');
var data = [];

function add (name, text) {
  data.push({ name: name, text: text, id: data.length });
  return _.clone(data[data.length - 1]);
}

function list () {
  return _.cloneDeep(data);
}

function find (properties) {
  return _.cloneDeep(_.filter(data, properties));
}

module.exports = { add: add, list: list, find: find };

var randArrayEl = function(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
};

var getInstructor = function() {
  var fakeFirsts = ['Dan', 'Ashi', 'Emily', 'Joe', 'Bender'];
  var fakeLasts = ['Postelthwait', 'Incadenza', 'Pemulis', 'Gately'];
  return randArrayEl(fakeFirsts) + ' ' + randArrayEl(fakeLasts);
};

var getCampus = function() {
  var awesomeAdj = ['Terra', 'Luna', 'Mars', 'Pluto', 'Jupiter'];
  return randArrayEl(awesomeAdj);
};

for (var i = 0; i < 10; i++) {
  module.exports.add( getInstructor(), getCampus() );
}