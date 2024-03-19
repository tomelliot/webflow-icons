import * as React from "react";
function TeamIcon({
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
    d: "M7 2a1 1 0 0 0-1 1v4H2a1 1 0 0 0-1 1v6h1V8h4v6h1V3h7v11h1V3a1 1 0 0 0-1-1H7Z"
  }));
}
const ForwardRef = React.forwardRef(TeamIcon);
export default ForwardRef;