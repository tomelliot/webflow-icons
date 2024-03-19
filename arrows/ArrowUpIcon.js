const React = require("react");
function ArrowUpIcon({
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
    d: "m9 3.707 3.146 3.147.708-.707L8.5 1.793 4.146 6.147l.708.707L8 3.707V13h1V3.707Z"
  }));
}
const ForwardRef = React.forwardRef(ArrowUpIcon);
module.exports = ForwardRef;