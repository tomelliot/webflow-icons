import * as React from "react";
function HappyIcon({
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
    d: "M9.757 8.956a2 2 0 0 1-3.514 0l-.878.48a3 3 0 0 0 5.27 0l-.878-.48ZM7 7a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM10 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M14 8A6 6 0 1 1 2 8a6 6 0 0 1 12 0Zm-1 0A5 5 0 1 1 3 8a5 5 0 0 1 10 0Z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = React.forwardRef(HappyIcon);
export default ForwardRef;