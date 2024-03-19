import * as React from "react";
function CodeIcon({
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
    d: "m6.015 13.879-.015.06V14h1.015l2.97-11.879.015-.06V2H8.985l-2.97 11.879ZM2.707 8l2.147 2.146-.707.708-2.5-2.5L1.293 8l.354-.354 2.5-2.5.707.708L2.707 8Zm10.586 0-2.146 2.146.707.708 2.5-2.5.353-.354-.353-.354-2.5-2.5-.707.708L13.293 8Z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = React.forwardRef(CodeIcon);
export default ForwardRef;