import * as React from "react";
function BackupsIcon({
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
    d: "M6.707 3 8.854.854 8.146.146 4.793 3.5l3.353 3.354.708-.708L6.707 4H8.5A4.5 4.5 0 1 1 4 8.5H3A5.5 5.5 0 1 0 8.5 3H6.707Z"
  }));
}
const ForwardRef = React.forwardRef(BackupsIcon);
export default ForwardRef;