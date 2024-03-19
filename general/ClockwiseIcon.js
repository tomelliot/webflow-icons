const React = require("react");
function ClockwiseIcon({
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
    d: "M14 2h-1v3.268l-1.606-1.652-.005-.005A5.5 5.5 0 1 0 7.5 13H9v-1H7.499a4.5 4.5 0 1 1 3.18-7.684L12.318 6H9v1h5V2Z"
  }));
}
const ForwardRef = React.forwardRef(ClockwiseIcon);
module.exports = ForwardRef;