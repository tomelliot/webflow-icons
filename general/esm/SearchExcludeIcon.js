import * as React from "react";
function SearchExcludeIcon({
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
    d: "m5.225 11.483-1.871 1.87-.708-.707 10-10 .708.708-1.871 1.87c.409.685.644 1.485.644 2.34 0 1.08-.375 2.072-1.003 2.853l2.73 2.73-.707.707-2.73-2.73a4.544 4.544 0 0 1-2.854 1.003 4.543 4.543 0 0 1-2.338-.644Zm.735-.736a3.563 3.563 0 0 0 4.786-4.786L5.96 10.746Z",
    clipRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 7.563c0 .866.24 1.675.659 2.364l.734-.735a3.563 3.563 0 0 1 4.8-4.8l.734-.733A4.563 4.563 0 0 0 3 7.563Z"
  }));
}
const ForwardRef = React.forwardRef(SearchExcludeIcon);
export default ForwardRef;