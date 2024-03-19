import * as React from "react";
function CheckDefaultIcon({
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
    d: "m13.354 4.354-6.5 6.5a.5.5 0 0 1-.707 0l-3.5-3.5.707-.708L6.5 9.793l6.146-6.147.708.708Z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = React.forwardRef(CheckDefaultIcon);
export default ForwardRef;