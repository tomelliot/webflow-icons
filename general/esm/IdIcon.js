import * as React from "react";
function IdIcon({
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
    d: "M4 4v8h1V4H4Z"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M7.5 4a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .5.5H9a4 4 0 0 0 0-8H7.5Zm.5 7V5h1a3 3 0 1 1 0 6H8Z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = React.forwardRef(IdIcon);
export default ForwardRef;