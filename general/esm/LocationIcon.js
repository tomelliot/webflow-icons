import * as React from "react";
function LocationIcon({
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
    d: "M14 8A6 6 0 1 1 2 8a6 6 0 0 1 12 0Zm-1 0a5 5 0 0 1-5.478 4.977L10 10.5V9a1 1 0 0 0-1-1H8V7h1V6L8 5l1.703-1.703A5.002 5.002 0 0 1 13 8ZM5.001 3.999A5 5 0 0 0 7.5 12.976V10H6V9l1-1-1.707-1.707A1 1 0 0 1 5 5.586V4l.001-.001Z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = React.forwardRef(LocationIcon);
export default ForwardRef;