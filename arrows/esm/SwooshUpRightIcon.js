import * as React from "react";
function SwooshUpRightIcon({
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
    d: "M12.293 6 9.146 2.854l.708-.708L14.207 6.5l-4.353 4.354-.708-.707L12.293 7H8.5A3.5 3.5 0 0 0 5 10.5V13H4v-2.5A4.5 4.5 0 0 1 8.5 6h3.793Z"
  }));
}
const ForwardRef = React.forwardRef(SwooshUpRightIcon);
export default ForwardRef;