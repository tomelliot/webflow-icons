import * as React from "react";
function ShareIcon({
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
    d: "M12.293 6 9.646 3.354l.708-.708L14.207 6.5l-3.853 3.854-.708-.708L12.293 7H8.5A3.5 3.5 0 0 0 5 10.5v2.473H4V10.5A4.5 4.5 0 0 1 8.5 6h3.793Z"
  }));
}
const ForwardRef = React.forwardRef(ShareIcon);
export default ForwardRef;