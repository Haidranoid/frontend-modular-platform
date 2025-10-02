'use strict';

var classCallCheck = require('../../common/temp/node_modules/.pnpm/@babel_runtime@7.28.4/node_modules/@babel/runtime/helpers/esm/classCallCheck.cjs');
var createClass = require('../../common/temp/node_modules/.pnpm/@babel_runtime@7.28.4/node_modules/@babel/runtime/helpers/esm/createClass.cjs');

var SecurityService = /*#__PURE__*/function () {
  function SecurityService(userAgent, navigator, screen) {
    classCallCheck.default(this, SecurityService);
    this.userAgent = userAgent;
    this.navigator = navigator;
    this.screen = screen;
  }
  return createClass.default(SecurityService, [{
    key: "hash",
    value: function hash(toHash) {
      var hash = 0;
      if (toHash.length === 0) return hash;
      for (var i = 0; i < toHash.length; i++) {
        var _char = toHash.charCodeAt(i);
        hash = (hash << 5) - hash + _char;
      }
      return hash;
    }
  }, {
    key: "getBrowserId",
    value: function getBrowserId() {
      var ua = this.userAgent;
      if (ua.includes('Opera')) return 'O';
      if (ua.includes('Chrome')) return 'C';
      if (ua.includes('Safari')) return 'S';
      if (ua.includes('Firefox')) return 'F';
      if (ua.includes('MSIE') || ua.includes('Windows') && ua.includes('Trident') && ua.includes('rv:11')) return 'M';
      return 'U';
    }
  }, {
    key: "getTimeZoneOffset",
    value: function getTimeZoneOffset() {
      var offset = (-1 * new Date().getTimezoneOffset()).toString().padStart(3, '0');
      return offset.startsWith('-') ? offset : "+".concat(offset);
    }
  }, {
    key: "getLanguageCode",
    value: function getLanguageCode() {
      var lang = this.getBrowserId() === 'M' ? this.navigator.systemLanguage : this.navigator.language;
      return String(lang !== null && lang !== void 0 ? lang : 'XX').substring(0, 2).toUpperCase();
    }
  }, {
    key: "getCookiesEnabled",
    value: function getCookiesEnabled() {
      return this.navigator.cookieEnabled ? 1 : 0;
    }
  }, {
    key: "getPlatform",
    value: function getPlatform() {
      var ua = this.userAgent;
      if (ua.includes('Android')) return 'D';
      if (ua.includes('iPhone')) return 'I';
      if (ua.includes('iPad')) return 'P';
      if (ua.includes('Windows')) return 'W';
      if (ua.includes('AppleWebKit')) return 'A';
      if (ua.includes('Blackberry')) return 'B';
      if (ua.includes('Kindle')) return 'K';
      if (ua.includes('Nokia')) return 'N';
      if (ua.includes('Ericsson')) return 'E';
      if (ua.includes('Gecko')) return 'G';
      return 'U';
    }
  }, {
    key: "getMarketingId",
    value: function getMarketingId() {
      var _this$navigator$cpuCl;
      var plugins = '';
      if (this.navigator.plugins && typeof this.navigator.plugins.length === 'number') {
        for (var i = 0; i < this.navigator.plugins.length; i++) {
          var plugin = this.navigator.plugins[i];
          if (plugin && typeof plugin.name === 'string') {
            plugins += plugin.name;
          }
        }
      }
      var id = this.userAgent;
      id += this.screen.width;
      id += this.screen.height;
      id += this.navigator.platform;
      id += (_this$navigator$cpuCl = this.navigator.cpuClass) !== null && _this$navigator$cpuCl !== void 0 ? _this$navigator$cpuCl : '';
      id += plugins;
      var marketingIdHash = this.hash(id).toString().substring(0, 12);
      marketingIdHash = marketingIdHash.padStart(12, '0');
      return marketingIdHash.replace(/-/g, 'A');
    }
  }, {
    key: "getBrowserFingerprint",
    value: function getBrowserFingerprint() {
      return this.getBrowserId() + this.getTimeZoneOffset() + this.getLanguageCode() + this.getCookiesEnabled() + this.getPlatform() + '|' + this.getMarketingId();
    }
  }]);
}();
var getBrowserSecurityService = function getBrowserSecurityService() {
  if (typeof window === 'undefined' || typeof navigator === 'undefined') {
    throw new Error('getBrowserSecurityService only works in the browser');
  }
  return new SecurityService(navigator.userAgent, navigator, window.screen);
};

exports.SecurityService = SecurityService;
exports.getBrowserSecurityService = getBrowserSecurityService;
