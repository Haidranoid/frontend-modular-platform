'use strict';

var _typeof = require('../../common/temp/node_modules/.pnpm/@babel_runtime@7.28.4/node_modules/@babel/runtime/helpers/esm/typeof.cjs');

function hasPayloadProperty(error) {
  return _typeof.default(error) === 'object' && error !== null && 'payload' in error;
}
function hasMessageProperty(error) {
  return _typeof.default(error) === 'object' && error !== null && 'message' in error;
}
function getErrorMessage(error) {
  if (error instanceof Error) {
    return error.message;
  }
  if (hasPayloadProperty(error)) {
    return String(error.payload.message);
  }
  if (hasMessageProperty(error)) {
    return String(error.message);
  }
  return 'An unexpected error occurred.';
}

exports.getErrorMessage = getErrorMessage;
exports.hasMessageProperty = hasMessageProperty;
exports.hasPayloadProperty = hasPayloadProperty;
