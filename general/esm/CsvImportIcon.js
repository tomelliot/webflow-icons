import * as React from "react";
function CsvImportIcon({
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
    d: "M3.354 10.354 5 8.707V14h1V8.707l1.646 1.647.708-.708L5.5 6.793 2.646 9.646l.708.708Z"
  }));
}
const ForwardRef = React.forwardRef(CsvImportIcon);
export default ForwardRef;