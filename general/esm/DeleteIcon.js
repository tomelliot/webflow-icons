import * as React from "react";
function DeleteIcon({
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
    d: "M7 2a1 1 0 0 0-1 1v1H3v1h1v6.5A1.5 1.5 0 0 0 5.5 13h6a1.5 1.5 0 0 0 1.5-1.5V5h1V4h-3V3a1 1 0 0 0-1-1H7Zm3 2V3H7v1h3Zm-5 7.5V5h7v6.5a.5.5 0 0 1-.5.5h-6a.5.5 0 0 1-.5-.5Z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = React.forwardRef(DeleteIcon);
export default ForwardRef;