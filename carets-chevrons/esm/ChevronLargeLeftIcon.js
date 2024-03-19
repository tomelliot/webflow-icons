import * as React from "react";
function ChevronLargeLeftIcon({
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
    d: "m6.707 8 3.647-3.646-.708-.708L5.293 8l4.353 4.354.707-.707L6.708 8Z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = React.forwardRef(ChevronLargeLeftIcon);
export default ForwardRef;