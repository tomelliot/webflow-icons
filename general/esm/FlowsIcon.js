import * as React from "react";
function FlowsIcon({
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
    d: "M9 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6 5a3 3 0 0 0 0 6h6.293l-2.147-2.146.708-.708 3.353 3.354-3.353 3.354-.708-.708L12.293 12H6a4 4 0 0 1 0-8v1Z"
  }));
}
const ForwardRef = React.forwardRef(FlowsIcon);
export default ForwardRef;