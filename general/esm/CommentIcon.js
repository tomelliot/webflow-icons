import * as React from "react";
function CommentIcon({
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
    d: "M4.5 7h7V6h-7v1ZM4.5 10H8V9H4.5v1Z"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M8.5 0A7.5 7.5 0 0 0 1 7.5v6A1.5 1.5 0 0 0 2.5 15h6a7.5 7.5 0 0 0 0-15ZM2 7.5A6.5 6.5 0 1 1 8.5 14h-6a.5.5 0 0 1-.5-.5v-6Z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = React.forwardRef(CommentIcon);
export default ForwardRef;