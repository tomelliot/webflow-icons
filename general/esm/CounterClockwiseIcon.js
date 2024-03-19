import * as React from "react";
function CounterClockwiseIcon({
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
    d: "M2 2h1v3.268l1.606-1.652.005-.005A5.5 5.5 0 1 1 8.5 13H7v-1h1.501a4.5 4.5 0 1 0-3.18-7.684L3.682 6H7v1H2V2Z"
  }));
}
const ForwardRef = React.forwardRef(CounterClockwiseIcon);
export default ForwardRef;