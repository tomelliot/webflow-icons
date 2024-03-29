import * as React from "react";
function MotionIcon({
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
    d: "M5.526 2a.5.5 0 0 1 .453.356l2.51 8.365 1.53-5.358a.5.5 0 0 1 .945-.049l1.587 3.967.502-1.005A.5.5 0 0 1 13.5 8H15v1h-1.191l-.862 1.724a.5.5 0 0 1-.911-.038l-1.457-3.642-1.598 5.593a.5.5 0 0 1-.96.007l-2.598-8.66-1.961 4.708A.5.5 0 0 1 3 9H1V8h1.667l2.371-5.692A.5.5 0 0 1 5.526 2Z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = React.forwardRef(MotionIcon);
export default ForwardRef;