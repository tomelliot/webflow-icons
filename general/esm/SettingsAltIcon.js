import * as React from "react";
function SettingsAltIcon({
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
    d: "M4 2v7H2v1h5V9H5V2H4ZM11 14V7h1v7h-1ZM4 14v-3h1v3H4ZM11 5V2h1v3h2v1H9V5h2Z"
  }));
}
const ForwardRef = React.forwardRef(SettingsAltIcon);
export default ForwardRef;