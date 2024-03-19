import * as React from "react";
function CmsExportIcon({
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
    d: "M7 1c-1.311 0-2.523.294-3.425.795C2.69 2.287 2 3.045 2 4v6c0 .954.69 1.713 1.575 2.205.902.5 2.114.795 3.425.795v-1c-1.174 0-2.212-.265-2.94-.67C3.318 10.918 3 10.427 3 10V8.823c.177.14.371.268.575.382C4.477 9.705 5.69 10 7 10V9c-1.174 0-2.212-.265-2.94-.67C3.318 7.918 3 7.427 3 7V5.823c.177.14.371.268.575.382C4.477 6.705 5.69 7 7 7s2.523-.294 3.425-.795c.204-.114.398-.241.575-.382V7h1V4c0-.954-.69-1.713-1.575-2.205C9.523 1.295 8.31 1 7 1Zm4 3c0-.426-.317-.917-1.06-1.33C9.211 2.264 8.173 2 7 2s-2.212.265-2.94.67C3.318 3.082 3 3.573 3 4c0 .426.317.917 1.06 1.33C4.789 5.736 5.827 6 7 6s2.212-.265 2.94-.67C10.682 4.918 11 4.427 11 4Z",
    clipRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m13.293 10.973-2.147-2.147.708-.707 3.353 3.354-3.353 3.353-.708-.707 2.147-2.146H8v-1h5.293Z"
  }));
}
const ForwardRef = React.forwardRef(CmsExportIcon);
export default ForwardRef;