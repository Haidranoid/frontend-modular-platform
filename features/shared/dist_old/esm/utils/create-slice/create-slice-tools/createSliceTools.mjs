import { createThunk } from './create-thunk/createThunk.mjs';
import { generateMatcher } from '../generate-matcher/generate-matcher.mjs';
import { getErrorMessage } from '../../error-handlers/errorHandlers.mjs';
import { MatcherIdentifiers } from '../../../constants/matcher-identifiers/MatcherIdentifiers.mjs';

function createSliceTools(api, slice) {
  var thunks = {};
  for (var key in api) {
    var type = "".concat(slice, "/").concat(key);
    thunks[key] = createThunk(type, api[key]['operation']);
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
    builder.addMatcher(generateMatcher(slice, MatcherIdentifiers.IS_PENDING), function (state) {
      state.isLoading = true;
      state.error = null;
    });

    // general REJECTED matcher for every thunk
    builder.addMatcher(generateMatcher(slice, MatcherIdentifiers.IS_REJECTED), function (state, action) {
      state.isLoading = false;
      state.error = getErrorMessage(action);
    });
  };
  return {
    thunks: thunks,
    names: names,
    extraReducers: extraReducers
  };
}

export { createSliceTools };
