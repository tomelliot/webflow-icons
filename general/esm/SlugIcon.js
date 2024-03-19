import * as React from "react";
function SlugIcon({
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
    d: "M10.933 3.92 8.866 7.5H13v1H8.866l2.067 3.58-.866.5L8 9l-2.067 3.58-.866-.5L7.134 8.5H3v-1h4.134L5.067 3.92l.866-.5L8 7l2.067-3.58.866.5Z"
  }));
}
const ForwardRef = React.forwardRef(SlugIcon);
export default ForwardRef;