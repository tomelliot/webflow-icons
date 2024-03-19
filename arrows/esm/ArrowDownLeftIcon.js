import * as React from "react";
function ArrowDownLeftIcon({
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
    d: "m4.707 12 7.147-7.146-.708-.708L4 11.293V7H3v6h6v-1H4.707Z"
  }));
}
const ForwardRef = React.forwardRef(ArrowDownLeftIcon);
export default ForwardRef;