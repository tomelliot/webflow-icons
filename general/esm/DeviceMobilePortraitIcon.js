import * as React from "react";
function DeviceMobilePortraitIcon({
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
    d: "M11 17h3v-1h-3v1Z"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M17 6.5A1.5 1.5 0 0 0 15.5 5h-6A1.5 1.5 0 0 0 8 6.5v11A1.5 1.5 0 0 0 9.5 19h6a1.5 1.5 0 0 0 1.5-1.5v-11ZM15.5 6a.5.5 0 0 1 .5.5v11a.5.5 0 0 1-.5.5h-6a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5h6Z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = React.forwardRef(DeviceMobilePortraitIcon);
export default ForwardRef;