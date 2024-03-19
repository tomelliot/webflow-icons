import * as React from "react";
function ArrowUpLeftIcon({
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
    d: "M4.707 4H9V3H3v6h1V4.707l7.146 7.147.708-.708L4.707 4Z"
  }));
}
const ForwardRef = React.forwardRef(ArrowUpLeftIcon);
export default ForwardRef;