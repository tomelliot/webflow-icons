import * as React from "react";
function WarningTriangleIcon({
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
    d: "M8 5v4h1V5H8ZM8.5 12a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M7.634 2a1 1 0 0 1 1.732 0l6.062 10.5a1 1 0 0 1-.866 1.5H2.438a1 1 0 0 1-.866-1.5L7.634 2Zm.866.5L2.438 13h12.124L8.5 2.5Z",
    clipRule: "evenodd",
    opacity: 0.4
  }));
}
const ForwardRef = React.forwardRef(WarningTriangleIcon);
export default ForwardRef;