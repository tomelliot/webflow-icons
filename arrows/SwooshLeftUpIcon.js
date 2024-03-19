const React = require("react");
function SwooshLeftUpIcon({
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
    d: "m7 3.707 3.146 3.147.708-.707L6.5 1.793 2.146 6.147l.708.707L6 3.707V8.5a4.5 4.5 0 0 0 4.5 4.5H12v-1h-1.5A3.5 3.5 0 0 1 7 8.5V3.707Z"
  }));
}
const ForwardRef = React.forwardRef(SwooshLeftUpIcon);
module.exports = ForwardRef;