import * as React from "react";
function UserDeleteIcon({
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
    d: "M8 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6ZM6 5a2 2 0 1 1 4 0 2 2 0 0 1-4 0Z",
    clipRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 11.5A1.5 1.5 0 0 1 4.5 10H8V9H4.5A2.5 2.5 0 0 0 2 11.5V13h1v-1.5ZM11.5 12.207l-1.646 1.647-.708-.708 1.647-1.646-1.647-1.646.708-.708 1.646 1.647 1.646-1.647.708.708-1.647 1.646 1.647 1.646-.708.708-1.646-1.647Z"
  }));
}
const ForwardRef = React.forwardRef(UserDeleteIcon);
export default ForwardRef;