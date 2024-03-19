import * as React from "react";
function PageSectionIcon({
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
    d: "M3 3a1 1 0 0 1 1-1h4.707L13 6.293V13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-2h1v2h8V6.707L8.293 3H4v3H3V3Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6.646 6.354 8.293 8H3v1h5.293l-1.647 1.646.708.708L10.207 8.5 7.354 5.646l-.708.708Z"
  }));
}
const ForwardRef = React.forwardRef(PageSectionIcon);
export default ForwardRef;