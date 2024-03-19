import * as React from "react";
function UndoIcon({
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
    d: "m3.707 5 2.647-2.646-.707-.708L1.793 5.5l3.854 3.854.707-.708L3.707 6H10a3 3 0 0 1 0 6H8v1h2a4 4 0 1 0 0-8H3.707Z"
  }));
}
const ForwardRef = React.forwardRef(UndoIcon);
export default ForwardRef;