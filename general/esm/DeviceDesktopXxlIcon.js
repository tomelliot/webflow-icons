import * as React from "react";
function DeviceDesktopXxlIcon({
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
    fillRule: "evenodd",
    d: "M4 4a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h5v3H6.5v1h12v-1H16v-3h5a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H4Zm11 11h-2v3h2v-3Zm-3 0h-2v3h2v-3ZM4 5h17v9H4V5Z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = React.forwardRef(DeviceDesktopXxlIcon);
export default ForwardRef;