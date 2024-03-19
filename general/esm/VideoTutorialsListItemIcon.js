import * as React from "react";
function VideoTutorialsListItemIcon({
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
    d: "M4 3.902a1 1 0 0 1 1.507-.862l7.014 4.126a1 1 0 0 1 0 1.723l-7.014 4.126A1 1 0 0 1 4 12.153V3.902Zm8.014 4.125L5 3.902v8.251l7.014-4.126Z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = React.forwardRef(VideoTutorialsListItemIcon);
export default ForwardRef;