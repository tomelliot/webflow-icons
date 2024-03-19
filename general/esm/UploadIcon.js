import * as React from "react";
function UploadIcon({
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
    d: "M4.12 5.024a4.001 4.001 0 0 1 7.76 0 3 3 0 0 1 .12 5.935V9.937A2 2 0 0 0 11.502 6H11.5l-.469.003-.061-.432a3 3 0 0 0-5.94 0l-.061.432L4.499 6A2 2 0 0 0 4 9.937v1.022a3 3 0 0 1 .12-5.935Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5.854 9.854 7.5 8.207V13h1V8.207l1.646 1.647.708-.708L8 6.293 5.146 9.146l.708.708Z"
  }));
}
const ForwardRef = React.forwardRef(UploadIcon);
export default ForwardRef;