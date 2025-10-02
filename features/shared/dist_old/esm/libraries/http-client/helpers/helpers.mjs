var extractPathVariables = function extractPathVariables(endpoint) {
  var regex = /\{([^}]+)\}/g; // Matches `{variableName}`
  var variables = {};
  var match;
  if (!endpoint) {
    return {};
  }
  while ((match = regex.exec(endpoint)) !== null) {
    variables[match[1]] = ''; // Initialize with empty string or default value
  }
  return variables;
};
var getBaseUrl = function getBaseUrl() {
  var isDev = process.env.NODE_ENV === 'development' || !process.env.NODE_ENV;
  var host = window.location.hostname;
  var devUrl = "http://".concat(host, ":8080");
  var prodUrl = process.env.BASE_URL || "http://".concat(host, ":8080");
  return isDev ? devUrl : prodUrl;
};

export { extractPathVariables, getBaseUrl };
