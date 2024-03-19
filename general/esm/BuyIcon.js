import * as React from "react";
function BuyIcon({
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
    d: "M10 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M7.707 2A1 1 0 0 0 7 2.293l-5.5 5.5a1 1 0 0 0 0 1.414L6.793 14.5a1 1 0 0 0 1.414 0l5.5-5.5A1 1 0 0 0 14 8.293V3a1 1 0 0 0-1-1H7.707Zm0 1H13v5.293l-5.5 5.5L2.207 8.5l5.5-5.5Z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = React.forwardRef(BuyIcon);
export default ForwardRef;