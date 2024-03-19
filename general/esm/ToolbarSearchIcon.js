import * as React from "react";
function ToolbarSearchIcon({
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
    d: "M14.874 15.582a6 6 0 1 1 .707-.707l3.773 3.771-.708.708-3.772-3.772ZM16 11a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z",
    clipRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8.525 13.475c-.195.195-.515.197-.684-.021a4 4 0 0 1 5.613-5.613c.218.17.216.489.02.684L11 11l-2.475 2.475Z",
    opacity: 0.4
  }));
}
const ForwardRef = React.forwardRef(ToolbarSearchIcon);
export default ForwardRef;