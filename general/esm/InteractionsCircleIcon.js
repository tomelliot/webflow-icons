import * as React from "react";
function InteractionsCircleIcon({
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
    d: "M8.5 6.5V3L5.489 7.732a.5.5 0 0 0 .422.768H8.5V12l3.011-4.732a.5.5 0 0 0-.422-.768H8.5Z"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M8.5 2a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11ZM2 7.5a6.5 6.5 0 1 1 13 0 6.5 6.5 0 0 1-13 0Z",
    clipRule: "evenodd",
    opacity: 0.4
  }));
}
const ForwardRef = React.forwardRef(InteractionsCircleIcon);
export default ForwardRef;