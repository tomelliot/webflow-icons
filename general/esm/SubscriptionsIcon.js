import * as React from "react";
function SubscriptionsIcon({
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
    d: "M3 7.5a5.5 5.5 0 1 1 11 0h1v-5h-1v1.534A6.5 6.5 0 1 0 8.5 14v-1A5.5 5.5 0 0 1 3 7.5Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8 3.5V5h-.5a1.5 1.5 0 1 0 0 3h2a.5.5 0 0 1 0 1h-3v1H8v1.5h1V10h.5a1.5 1.5 0 0 0 0-3h-2a.5.5 0 0 1 0-1h3V5H9V3.5H8Z"
  }));
}
const ForwardRef = React.forwardRef(SubscriptionsIcon);
export default ForwardRef;