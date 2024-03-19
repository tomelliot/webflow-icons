import * as React from "react";
function FlagIcon({
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
    d: "M4.111 2.167V1H3v14h1.111V9.167H12a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H4.111Zm7.778 3.5H9.667V3.333h2.222v2.334Zm-2.222 0V8H7.444V5.667h2.223ZM7.444 3.333v2.334H5.222V3.333h2.222Z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = React.forwardRef(FlagIcon);
export default ForwardRef;