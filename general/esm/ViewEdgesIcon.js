import * as React from "react";
function ViewEdgesIcon({
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
    d: "M2 3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v5h-1V3H3v10h3.5v1H3a1 1 0 0 1-1-1V3Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9 15V8l5 5h-3l-2 2Z"
  }));
}
const ForwardRef = React.forwardRef(ViewEdgesIcon);
export default ForwardRef;