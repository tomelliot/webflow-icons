import * as React from "react";
function MergeCellRightIcon({
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
    d: "M11 1h1v13h-1V1ZM7.293 7 5.146 4.854l.708-.708L9.207 7.5l-3.353 3.354-.708-.708L7.293 8H2V7h5.293Z"
  }));
}
const ForwardRef = React.forwardRef(MergeCellRightIcon);
export default ForwardRef;