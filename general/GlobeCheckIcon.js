const React = require("react");
function GlobeCheckIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    fill: "currentColor",
    "aria-hidden": "true",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M8.5 2c-.057 0-.192.035-.386.281-.19.241-.383.62-.554 1.134-.305.916-.513 2.17-.553 3.585H8.5v1H7.007c.04 1.415.248 2.669.553 3.585.171.513.364.893.554 1.134.195.247.329.281.386.281v1a6.5 6.5 0 1 1 6.481-7h-1.003a5.505 5.505 0 0 0-3.957-4.787c.138.265.26.564.368.886.345 1.036.564 2.4.604 3.901h-1c-.04-1.415-.248-2.669-.553-3.585-.171-.513-.364-.893-.554-1.134C8.69 2.034 8.557 2 8.5 2ZM6.61 3.1c-.345 1.035-.564 2.4-.604 3.9H3.022A5.504 5.504 0 0 1 6.98 2.213c-.138.265-.26.564-.368.886ZM6.007 8H3.022a5.505 5.505 0 0 0 3.957 4.787 6.13 6.13 0 0 1-.368-.886C6.266 10.866 6.047 9.5 6.007 8Z",
    clipRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "m15.854 8.854-4 4a.5.5 0 0 1-.707 0l-2-2 .707-.707 1.646 1.646 3.646-3.647.708.708Z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = React.forwardRef(GlobeCheckIcon);
module.exports = ForwardRef;