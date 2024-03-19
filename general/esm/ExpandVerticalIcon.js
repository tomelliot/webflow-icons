import * as React from "react";
function ExpandVerticalIcon({
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
    d: "M5.854 6.854 8.5 4.207l2.646 2.647.708-.708L8.5 2.793 5.146 6.146l.708.708ZM5.854 9.146 8.5 11.793l2.646-2.647.708.708L8.5 13.207 5.146 9.854l.708-.708Z"
  }));
}
const ForwardRef = React.forwardRef(ExpandVerticalIcon);
export default ForwardRef;