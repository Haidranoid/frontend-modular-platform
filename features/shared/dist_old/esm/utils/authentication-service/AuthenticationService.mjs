import _classCallCheck from '../../common/temp/node_modules/.pnpm/@babel_runtime@7.28.4/node_modules/@babel/runtime/helpers/esm/classCallCheck.mjs';
import _createClass from '../../common/temp/node_modules/.pnpm/@babel_runtime@7.28.4/node_modules/@babel/runtime/helpers/esm/createClass.mjs';
import _defineProperty from '../../common/temp/node_modules/.pnpm/@babel_runtime@7.28.4/node_modules/@babel/runtime/helpers/esm/defineProperty.mjs';

var AuthenticationService = /*#__PURE__*/function () {
  function AuthenticationService() {
    _classCallCheck(this, AuthenticationService);
  }
  return _createClass(AuthenticationService, null, [{
    key: "getAccessToken",
    value: function getAccessToken() {
      var _localStorage$getItem;
      return (_localStorage$getItem = localStorage.getItem(AuthenticationService.ACCESS_TOKEN)) !== null && _localStorage$getItem !== void 0 ? _localStorage$getItem : '';
    }
  }, {
    key: "getRefreshToken",
    value: function getRefreshToken() {
      var _localStorage$getItem2;
      return (_localStorage$getItem2 = localStorage.getItem(AuthenticationService.REFRESH_TOKEN)) !== null && _localStorage$getItem2 !== void 0 ? _localStorage$getItem2 : '';
    }
  }, {
    key: "setAccessToken",
    value: function setAccessToken(token) {
      if (!token) throw new Error('accessToken is required');
      localStorage.setItem(AuthenticationService.ACCESS_TOKEN, token);
    }
  }, {
    key: "setRefreshToken",
    value: function setRefreshToken(token) {
      if (!token) throw new Error('refreshToken is required');
      localStorage.setItem(AuthenticationService.REFRESH_TOKEN, token);
    }
  }, {
    key: "startSession",
    value: function startSession(accessToken, refreshToken) {
      this.setAccessToken(accessToken);
      this.setRefreshToken(refreshToken);
    }
  }, {
    key: "closeSession",
    value: function closeSession() {
      localStorage.removeItem(AuthenticationService.ACCESS_TOKEN);
      localStorage.removeItem(AuthenticationService.REFRESH_TOKEN);
    }
  }]);
}();
_defineProperty(AuthenticationService, "ACCESS_TOKEN", 'accessToken');
_defineProperty(AuthenticationService, "REFRESH_TOKEN", 'refreshToken');

export { AuthenticationService };
