import * as React from "react";
function HelpCircleIcon({
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
  }, title) : null, /*#__PURE__*/React.createElement("circle", {
    cx: 8.5,
    cy: 7.5,
    r: 6,
    stroke: "#F5F5F5",
    opacity: 0.4
  }), /*#__PURE__*/React.createElement("path", {
    d: "M7.5 4A1.5 1.5 0 0 0 6 5.5V6h1v-.5a.5.5 0 0 1 .5-.5h1.826a.5.5 0 0 1 .38.825L8.36 7.394A1.5 1.5 0 0 0 8 8.37V9h1v-.63a.5.5 0 0 1 .12-.325l1.345-1.569C11.299 5.503 10.607 4 9.325 4H7.5ZM8.5 11.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
  }));
}
const ForwardRef = React.forwardRef(HelpCircleIcon);
export default ForwardRef;