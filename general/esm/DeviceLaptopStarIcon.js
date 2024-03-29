import * as React from "react";
function DeviceLaptopStarIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React.createElement("path", {
    d: "M18 11h1V8.366l2.281 1.317.5-.866L19.5 7.5l2.281-1.317-.5-.866L19 6.634V4h-1v2.634l-2.281-1.317-.5.866L17.5 7.5l-2.281 1.317.5.866L18 8.366V11Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5.5 6H14v1H5.5a.5.5 0 0 0-.5.5V17h14v-5h1v5l3 .027v1H1v-1L4 17V7.5A1.5 1.5 0 0 1 5.5 6Z"
  }));
}
const ForwardRef = React.forwardRef(DeviceLaptopStarIcon);
export default ForwardRef;