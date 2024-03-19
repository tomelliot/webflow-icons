import * as React from "react";
function TransitionIcon({
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
    d: "M8 5.5V8a1 1 0 0 0 1 1h2.5V8H9V5.5H8Z"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M10 2H9v1.022a5.5 5.5 0 1 1-1 0V2H7V1h3v1Zm3 6.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = React.forwardRef(TransitionIcon);
export default ForwardRef;