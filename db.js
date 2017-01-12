'use strict';
/*
  Sets up randomized Instructor/Campus database
*/
var _ = require('lodash');
var data = [];

function add (name, campus) {
  data.push({ name: name, campus: campus, id: data.length });
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
  var fakeLasts = ['Postelthwait', 'Incadenza', 'Pemulis', 'Gately', 'Hola', 'Schwartz', 'Hassan'];
  return randArrayEl(fakeFirsts) + ' ' + randArrayEl(fakeLasts);
};

var getCampus = function() {
  var loc = ['Terra', 'Luna', 'Mars', 'Pluto', 'Jupiter'];
  return randArrayEl(loc);
};

for (var i = 0; i < 10; i++) {
  module.exports.add( getInstructor(), getCampus() );
}