import * as React from "react";
function CmsManageIcon({
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
    d: "M3.575 2.795C4.477 2.295 5.69 2 7 2s2.523.294 3.425.795C11.31 3.287 12 4.045 12 5v3h-1V6.823a4.213 4.213 0 0 1-.575.382C9.523 7.705 8.31 8 7 8s-2.523-.294-3.425-.795A4.214 4.214 0 0 1 3 6.823V8c0 .426.317.917 1.06 1.33.728.405 1.766.67 2.94.67v1c-1.311 0-2.523-.294-3.425-.795A4.205 4.205 0 0 1 3 9.823V11c0 .426.317.917 1.06 1.33.728.405 1.766.67 2.94.67v1c-1.311 0-2.523-.294-3.425-.795C2.69 12.713 2 11.955 2 11V5c0-.954.69-1.713 1.575-2.205Zm6.364.874C10.683 4.083 11 4.574 11 5c0 .426-.317.917-1.06 1.33C9.211 6.736 8.173 7 7 7s-2.212-.265-2.94-.67C3.318 5.918 3 5.427 3 5c0-.426.317-.917 1.06-1.33C4.789 3.264 5.827 3 7 3s2.212.265 2.94.67Z",
    clipRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9 14h.707l4.647-4.646-.708-.708L9 13.293V14Z"
  }));
}
const ForwardRef = React.forwardRef(CmsManageIcon);
export default ForwardRef;