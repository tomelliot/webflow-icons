import * as React from "react";
function UpdatesIcon({
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
    d: "M13.82 3.116A.5.5 0 0 1 14 3.5v8a.5.5 0 0 1-.59.492L6 10.645V14H5v-3.537l-2.59-.471A.5.5 0 0 1 2 9.5v-4a.5.5 0 0 1 .41-.492l11-2a.5.5 0 0 1 .41.108ZM3 5.917v3.166L13 10.9V4.099L3 5.917Z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = React.forwardRef(UpdatesIcon);
export default ForwardRef;