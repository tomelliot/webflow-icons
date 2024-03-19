import * as React from "react";
function MergeCellDownIcon({
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
    d: "M8 8.293V3h1v5.293l2.146-2.147.708.708L8.5 10.207 5.146 6.854l.708-.708L8 8.293ZM2 13v-1h13v1H2Z"
  }));
}
const ForwardRef = React.forwardRef(MergeCellDownIcon);
export default ForwardRef;