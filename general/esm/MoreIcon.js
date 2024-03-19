import * as React from "react";
function MoreIcon({
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
    d: "M3 8a1 1 0 1 1 2 0 1 1 0 0 1-2 0ZM7 8a1 1 0 1 1 2 0 1 1 0 0 1-2 0ZM11 8a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z"
  }));
}
const ForwardRef = React.forwardRef(MoreIcon);
export default ForwardRef;