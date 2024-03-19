import * as React from "react";
function UpgradeIcon({
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
    d: "M7.5 2a6.53 6.53 0 0 0-1.268.124l.194.98a5.5 5.5 0 1 1 0 10.79l-.194.982A6.5 6.5 0 1 0 7.5 2ZM3.888 3.095a6.533 6.533 0 0 0-1.793 1.793l.831.556c.402-.6.918-1.116 1.518-1.518l-.556-.83ZM1.124 7.232a6.53 6.53 0 0 0 0 2.536l.98-.194a5.529 5.529 0 0 1 0-2.148l-.98-.194ZM2.095 12.112a6.533 6.533 0 0 0 1.793 1.793l.556-.831a5.533 5.533 0 0 1-1.518-1.518l-.83.556Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M7 6.707 5.354 8.354l-.708-.708L7.5 4.793l2.854 2.853-.708.708L8 6.707V12H7V6.707Z"
  }));
}
const ForwardRef = React.forwardRef(UpgradeIcon);
export default ForwardRef;