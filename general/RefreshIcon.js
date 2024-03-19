const React = require("react");
function RefreshIcon({
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
    d: "M13.5 8a5.5 5.5 0 0 0-8.8-4.4l.6.8A4.5 4.5 0 0 1 12.5 8v.793l-1.646-1.647-.708.708L13 10.707l2.854-2.853-.708-.708L13.5 8.793V8ZM3.5 7.207l1.646 1.647.708-.708L3 5.293.146 8.146l.708.708L2.5 7.207V8a5.5 5.5 0 0 0 8.8 4.4l-.6-.8A4.5 4.5 0 0 1 3.5 8v-.793Z"
  }));
}
const ForwardRef = React.forwardRef(RefreshIcon);
module.exports = ForwardRef;