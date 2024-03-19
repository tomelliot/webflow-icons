import * as React from "react";
function PinIcon({
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
    d: "M9.854 2.146a.5.5 0 0 0-.828.196l-.921 2.763-2.763.92a.5.5 0 0 0-.196.829L6.793 8.5 3 12.293V13h.707L7.5 9.207l1.646 1.647a.5.5 0 0 0 .828-.196l.921-2.763 2.763-.92a.5.5 0 0 0 .196-.829l-4-4Zm-.88 3.512.745-2.232 2.855 2.856-2.232.744a.5.5 0 0 0-.316.316L9.28 9.574 6.426 6.72l2.232-.745a.5.5 0 0 0 .316-.316Z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = React.forwardRef(PinIcon);
export default ForwardRef;