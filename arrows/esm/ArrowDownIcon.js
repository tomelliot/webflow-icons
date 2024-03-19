import * as React from "react";
function ArrowDownIcon({
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
    d: "M8 12.293 4.854 9.146l-.708.708L8.5 14.207l4.354-4.353-.707-.708L9 12.293V3H8v9.293Z"
  }));
}
const ForwardRef = React.forwardRef(ArrowDownIcon);
export default ForwardRef;