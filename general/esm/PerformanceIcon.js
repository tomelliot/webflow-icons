import * as React from "react";
function PerformanceIcon({
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
    d: "M3.055 5.001A7.08 7.08 0 0 1 8 3c1.697 0 3.332.603 4.604 1.689l.542-.543.708.708-5.5 5.5a.5.5 0 0 1-.708-.708L11.894 5.4A6.094 6.094 0 0 0 8 4a6.08 6.08 0 0 0-4.247 1.717A5.77 5.77 0 0 0 2 9.847V11H1V9.846c0-1.82.74-3.562 2.055-4.845ZM13.303 7.111l.733-.732A6.731 6.731 0 0 1 15 9.846V11h-1V9.846c0-.961-.243-1.9-.697-2.735Z"
  }));
}
const ForwardRef = React.forwardRef(PerformanceIcon);
export default ForwardRef;