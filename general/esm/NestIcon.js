import * as React from "react";
function NestIcon({
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
    d: "M4 2v2.5A3.5 3.5 0 0 0 7.5 8h3.793L8.146 4.854l.708-.708L13.207 8.5l-4.353 4.354-.708-.708L11.293 9H7.5A4.5 4.5 0 0 1 3 4.5V2h1Z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = React.forwardRef(NestIcon);
export default ForwardRef;