const React = require("react");
function MergeCellLeftIcon({
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
    d: "M4 14V1h1v13H4ZM8.707 7l2.147-2.146-.708-.708L6.793 7.5l3.353 3.354.708-.708L8.707 8H14V7H8.707Z"
  }));
}
const ForwardRef = React.forwardRef(MergeCellLeftIcon);
module.exports = ForwardRef;