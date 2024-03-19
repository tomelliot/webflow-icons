import * as React from "react";
function ArrowLeftIcon({
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
    d: "m3.707 7 3.147-3.146-.707-.708L1.793 7.5l4.354 4.354.707-.707L3.707 8H13V7H3.707Z"
  }));
}
const ForwardRef = React.forwardRef(ArrowLeftIcon);
export default ForwardRef;