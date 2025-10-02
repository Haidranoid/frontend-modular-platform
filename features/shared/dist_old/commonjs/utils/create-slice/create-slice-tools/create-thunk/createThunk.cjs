'use strict';

var asyncToGenerator = require('../../../../common/temp/node_modules/.pnpm/@babel_runtime@7.28.4/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.cjs');
var index = require('../../../../_virtual/index.cjs');
var toolkit = require('@reduxjs/toolkit');

function createThunk(type, payloadCreator) {
  return toolkit.createAsyncThunk(type, /*#__PURE__*/function () {
    var _ref = asyncToGenerator.default(/*#__PURE__*/index.default.mark(function _callee(args, thunkAPI) {
      var _t;
      return index.default.wrap(function (_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 1;
            return payloadCreator(args);
          case 1:
            return _context.abrupt("return", _context.sent);
          case 2:
            _context.prev = 2;
            _t = _context["catch"](0);
            return _context.abrupt("return", thunkAPI.rejectWithValue(_t));
          case 3:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[0, 2]]);
    }));
    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }());
}

exports.createThunk = createThunk;
