import * as React from "react";
function DeleteKeyIcon({
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
    d: "M13.5 3H5.207a.5.5 0 0 0-.354.146l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .354.146H13.5a.5.5 0 0 0 .5-.5v-8a.5.5 0 0 0-.5-.5ZM5.558 9.558 7.616 7.5 5.558 5.442l.884-.884L8.5 6.616l2.058-2.058.884.884L9.384 7.5l2.058 2.058-.884.884L8.5 8.384l-2.058 2.058-.884-.884Z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = React.forwardRef(DeleteKeyIcon);
export default ForwardRef;