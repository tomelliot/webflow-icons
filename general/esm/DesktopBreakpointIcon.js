import * as React from "react";
function DesktopBreakpointIcon({
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
    d: "M2 12V5a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v7h2v1H0v-1h2Zm1-7h10v7H3V5Z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = React.forwardRef(DesktopBreakpointIcon);
export default ForwardRef;