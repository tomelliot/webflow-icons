import * as React from "react";
function ExpandDefaultIcon({
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
    d: "M7.5 5H11v3.5h1V4H7.5v1ZM8.5 11H5V7.5H4V12h4.5v-1Z"
  }));
}
const ForwardRef = React.forwardRef(ExpandDefaultIcon);
export default ForwardRef;