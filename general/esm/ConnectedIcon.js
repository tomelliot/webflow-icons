import * as React from "react";
function ConnectedIcon({
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
    d: "M8 4v3.5h2.158a.5.5 0 0 1 .439.74L8 13V9.5H5.842a.5.5 0 0 1-.439-.74L8 4Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14 8.5A3.5 3.5 0 0 0 10.5 5v1a2.5 2.5 0 0 1 0 5v1A3.5 3.5 0 0 0 14 8.5ZM3 8.5A2.5 2.5 0 0 1 5.5 6V5a3.5 3.5 0 1 0 0 7v-1A2.5 2.5 0 0 1 3 8.5Z"
  }));
}
const ForwardRef = React.forwardRef(ConnectedIcon);
export default ForwardRef;