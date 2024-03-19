import * as React from "react";
function UplevelIcon({
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
    d: "M14 12h-2.5A3.5 3.5 0 0 1 8 8.5V4.707l3.146 3.147.708-.708L7.5 2.793 3.146 7.146l.708.708L7 4.707V8.5a4.5 4.5 0 0 0 4.5 4.5H14v-1Z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = React.forwardRef(UplevelIcon);
export default ForwardRef;