'use strict';

var createThunk = require('./create-thunk/createThunk.cjs');
var generateMatcher = require('../generate-matcher/generate-matcher.cjs');
var errorHandlers = require('../../error-handlers/errorHandlers.cjs');
var MatcherIdentifiers = require('../../../constants/matcher-identifiers/MatcherIdentifiers.cjs');

function createSliceTools(api, slice) {
  var thunks = {};
  for (var key in api) {
    var type = "".concat(slice, "/").concat(key);
    thunks[key] = createThunk.createThunk(type, api[key]['operation']);
  }
  var names = Object.keys(api).reduce(function (acc, key) {
    acc[key] = "".concat(slice, "/").concat(key);
    return acc;
  }, {});
  var extraReducers = function extraReducers(builder) {
    Object.keys(thunks).forEach(function (key) {
      var thunk = thunks[key];
      builder.addCase(thunk.fulfilled, function (state, action) {
        state.isLoading = false;
        state.error = null;
        api[key].onSuccess(state, action);
      });
    });

    // general PENDING matcher for every thunk
    builder.addMatcher(generateMatcher.generateMatcher(slice, MatcherIdentifiers.MatcherIdentifiers.IS_PENDING), function (state) {
      state.isLoading = true;
      state.error = null;
    });

    // general REJECTED matcher for every thunk
    builder.addMatcher(generateMatcher.generateMatcher(slice, MatcherIdentifiers.MatcherIdentifiers.IS_REJECTED), function (state, action) {
      state.isLoading = false;
      state.error = errorHandlers.getErrorMessage(action);
    });
  };
  return {
    thunks: thunks,
    names: names,
    extraReducers: extraReducers
  };
}

exports.createSliceTools = createSliceTools;
