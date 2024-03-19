import * as React from "react";
function BriefcaseIcon({
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
    d: "M6 2a1 1 0 0 0-1 1v2H3a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-2V3a1 1 0 0 0-1-1H6Zm4 3V3H6v2h4ZM3 6h10v7H3V6Z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = React.forwardRef(BriefcaseIcon);
export default ForwardRef;