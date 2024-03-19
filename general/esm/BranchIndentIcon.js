import * as React from "react";
function BranchIndentIcon({
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
    d: "M2 3.5V0H1v3.5A4.5 4.5 0 0 0 5.5 8h3.793l-2.147 2.146.708.708L11.207 7.5 7.854 4.146l-.708.708L9.293 7H5.5A3.5 3.5 0 0 1 2 3.5Z"
  }));
}
const ForwardRef = React.forwardRef(BranchIndentIcon);
export default ForwardRef;