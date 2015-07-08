var lodash = require("lodash");
var Q = require("q");

function mapObjectPromises(input, func) {
  return Q.all(_.map(input, func)).then(function(data) {
    return _.zipObject(_.keys(input), data);
  });
}

module.exports = mapObjectPromises;
