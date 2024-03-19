import * as React from "react";
function TabNewIcon({
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
    d: "M10.293 5H6V4h6v6h-1V5.707l-5.646 5.647-.708-.708L10.293 5Z"
  }));
}
const ForwardRef = React.forwardRef(TabNewIcon);
export default ForwardRef;