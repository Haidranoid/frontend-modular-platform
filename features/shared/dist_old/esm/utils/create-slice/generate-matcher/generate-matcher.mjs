import { isPending, isRejected, isFulfilled } from '@reduxjs/toolkit';
import { MatcherIdentifiers } from '../../../constants/matcher-identifiers/MatcherIdentifiers.mjs';

var generateMatcher = function generateMatcher(slice, testId) {
  return function (action) {
    var startsWith = action.type.startsWith("".concat(slice, "/"));
    if (testId === MatcherIdentifiers.IS_PENDING) {
      return startsWith && isPending(action);
    }
    if (testId === MatcherIdentifiers.IS_REJECTED) {
      return startsWith && isRejected(action);
    }
    if (testId === MatcherIdentifiers.IS_FULFILLED) {
      return startsWith && isFulfilled(action);
    }
    return false;
  };
};

export { generateMatcher };
