import * as React from "react";
function CloseCircleIcon({
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
    d: "M7.793 7.5 5.646 9.646l.708.707L8.5 8.207l2.146 2.146.708-.707L9.207 7.5l2.147-2.146-.707-.708L8.5 6.793 6.354 4.646l-.708.708L7.793 7.5Z"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M8.5 2a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11ZM2 7.5a6.5 6.5 0 1 1 13 0 6.5 6.5 0 0 1-13 0Z",
    clipRule: "evenodd",
    opacity: 0.4
  }));
}
const ForwardRef = React.forwardRef(CloseCircleIcon);
export default ForwardRef;