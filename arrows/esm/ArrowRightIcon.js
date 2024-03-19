import * as React from "react";
function ArrowRightIcon({
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
    d: "M12.293 7 9.146 3.854l.708-.708L14.207 7.5l-4.353 4.354-.708-.707L12.293 8H3V7h9.293Z"
  }));
}
const ForwardRef = React.forwardRef(ArrowRightIcon);
export default ForwardRef;