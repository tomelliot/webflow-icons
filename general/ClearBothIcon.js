const React = require("react");
function ClearBothIcon({
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
    d: "M3 2.5a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-2ZM3.707 10l1.647-1.646-.707-.708L1.793 10.5l2.854 2.854.707-.708L3.707 11H6.5c.818 0 1.544-.393 2-1 .456.607 1.182 1 2 1h2.793l-1.646 1.646.707.707 2.853-2.853-2.853-2.854-.707.708L13.293 10H10.5A1.5 1.5 0 0 1 9 8.5V6H8v2.5A1.5 1.5 0 0 1 6.5 10H3.707Z"
  }));
}
const ForwardRef = React.forwardRef(ClearBothIcon);
module.exports = ForwardRef;