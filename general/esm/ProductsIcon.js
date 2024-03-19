import * as React from "react";
function ProductsIcon({
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
    d: "M11 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M8.707 2A1 1 0 0 0 8 2.293l-5.5 5.5a1 1 0 0 0 0 1.414L7.793 14.5a1 1 0 0 0 1.414 0l5.5-5.5A1 1 0 0 0 15 8.293V3a1 1 0 0 0-1-1H8.707Zm0 1H14v5.293l-5.5 5.5L3.207 8.5l5.5-5.5Z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = React.forwardRef(ProductsIcon);
export default ForwardRef;