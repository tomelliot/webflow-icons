import * as React from "react";
function CaretBothIcon({
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
    d: "M8.854 4.147 8.5 3.793l-.354.354-2.5 2.5.708.707L8.5 5.207l2.146 2.147.708-.707-2.5-2.5Zm0 7.707-.354.353-.354-.353-2.5-2.5.708-.707L8.5 10.793l2.146-2.146.708.707-2.5 2.5Z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = React.forwardRef(CaretBothIcon);
export default ForwardRef;