import * as React from "react";
function BookshelfIcon({
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
    d: "M4 13V2h1v11H4ZM7 13V2h1v11H7ZM9.033 2.678l4 10.5.934-.356-4-10.5-.934.356Z"
  }));
}
const ForwardRef = React.forwardRef(BookshelfIcon);
export default ForwardRef;