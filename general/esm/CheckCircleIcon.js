import * as React from "react";
function CheckCircleIcon({
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
    d: "M8.5 2a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11ZM2 7.5a6.5 6.5 0 1 1 13 0 6.5 6.5 0 0 1-13 0Z",
    clipRule: "evenodd",
    opacity: 0.4
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "m12.354 5.354-4.5 4.5a.5.5 0 0 1-.708 0l-2.5-2.5.708-.708L7.5 8.793l4.146-4.147.708.708Z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = React.forwardRef(CheckCircleIcon);
export default ForwardRef;