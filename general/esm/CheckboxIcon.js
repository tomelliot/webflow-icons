import * as React from "react";
function CheckboxIcon({
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
    d: "M2 3a1 1 0 0 1 1-1h7v1H3v10h10V8h1v5a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3Z",
    clipRule: "evenodd",
    opacity: 0.6
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M13.854 3.854 8 9.707 5.146 6.854l.708-.708L8 8.293l5.146-5.147.708.708Z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = React.forwardRef(CheckboxIcon);
export default ForwardRef;