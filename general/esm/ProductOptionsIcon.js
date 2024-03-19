import * as React from "react";
function ProductOptionsIcon({
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
    d: "M12 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M9 2.293A1 1 0 0 1 9.707 2H14a1 1 0 0 1 1 1v4.293a1 1 0 0 1-.293.707l-4.5 4.5a1 1 0 0 1-1.414 0L4.5 8.207a1 1 0 0 1 0-1.414l4.5-4.5ZM14 3H9.707l-4.5 4.5L9.5 11.793l4.5-4.5V3Z",
    clipRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6.853 2.854 2.207 7.5l4.646 4.646-.707.708L1.5 8.207a1 1 0 0 1 0-1.414l4.646-4.647.707.708Z"
  }));
}
const ForwardRef = React.forwardRef(ProductOptionsIcon);
export default ForwardRef;