import * as React from "react";
function CsvExportIcon({
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
    d: "M3 3a1 1 0 0 1 1-1h4.707L13 6.293V13a1 1 0 0 1-1 1H9v-1h3V6.707L8.293 3H4v3H3V3Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4 7.5v5.293l-1.646-1.647-.708.708L4.5 14.707l2.854-2.853-.708-.708L5 12.793V7.5H4Z"
  }));
}
const ForwardRef = React.forwardRef(CsvExportIcon);
export default ForwardRef;