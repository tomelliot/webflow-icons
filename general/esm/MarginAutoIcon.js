import * as React from "react";
function MarginAutoIcon({
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
    d: "M4.293 6.973 2.146 4.826l.708-.707 3.353 3.354-3.353 3.353-.708-.707 2.147-2.146H0v-1h4.293ZM11.707 6.973l2.147-2.147-.708-.707-3.353 3.354 3.353 3.353.708-.707-2.147-2.146H16v-1h-4.293ZM7 5.973h2v3H7v-3Z"
  }));
}
const ForwardRef = React.forwardRef(MarginAutoIcon);
export default ForwardRef;