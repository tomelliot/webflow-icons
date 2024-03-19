import * as React from "react";
function NoClassStatesIcon({
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
    d: "M6 3h1.5v4H11a1 1 0 0 1 1 1v2.586a1 1 0 0 1-.293.707l-1.414 1.414a1 1 0 0 1-.707.293H6.189L2.97 9.78 4.03 8.72 6 10.69V3Z"
  }));
}
const ForwardRef = React.forwardRef(NoClassStatesIcon);
export default ForwardRef;