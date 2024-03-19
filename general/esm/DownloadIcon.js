import * as React from "react";
function DownloadIcon({
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
    d: "M7.5 8.266V2.973h1v5.293l2.146-2.147.708.707L8 10.18 4.646 6.826l.708-.707L7.5 8.266ZM2 12.973v-1h12v1H2Z"
  }));
}
const ForwardRef = React.forwardRef(DownloadIcon);
export default ForwardRef;