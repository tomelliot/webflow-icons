import * as React from "react";
function EasingPlayIcon({
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
    d: "M8.5 14a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13ZM7 4.664V10.5l5-3-5-2.836Z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = React.forwardRef(EasingPlayIcon);
export default ForwardRef;