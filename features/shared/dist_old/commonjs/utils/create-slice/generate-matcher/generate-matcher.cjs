'use strict';

var toolkit = require('@reduxjs/toolkit');
var MatcherIdentifiers = require('../../../constants/matcher-identifiers/MatcherIdentifiers.cjs');

var generateMatcher = function generateMatcher(slice, testId) {
  return function (action) {
    var startsWith = action.type.startsWith("".concat(slice, "/"));
    if (testId === MatcherIdentifiers.MatcherIdentifiers.IS_PENDING) {
      return startsWith && toolkit.isPending(action);
    }
    if (testId === MatcherIdentifiers.MatcherIdentifiers.IS_REJECTED) {
      return startsWith && toolkit.isRejected(action);
    }
    if (testId === MatcherIdentifiers.MatcherIdentifiers.IS_FULFILLED) {
      return startsWith && toolkit.isFulfilled(action);
    }
    return false;
  };
};

exports.generateMatcher = generateMatcher;
