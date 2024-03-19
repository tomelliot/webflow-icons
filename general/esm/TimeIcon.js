import * as React from "react";
function TimeIcon({
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
    d: "M8 4v4h4V7H9V4H8Z"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M8.5 1a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM3 7.5a5.5 5.5 0 1 1 11 0 5.5 5.5 0 0 1-11 0Z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = React.forwardRef(TimeIcon);
export default ForwardRef;