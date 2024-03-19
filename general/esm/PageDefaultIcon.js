import * as React from "react";
function PageDefaultIcon({
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
    fillRule: "evenodd",
    d: "M3 3a1 1 0 0 1 1-1h4.707L13 6.293V13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V3Zm5.293 0H4v10h8V6.707L8.293 3Z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = React.forwardRef(PageDefaultIcon);
export default ForwardRef;