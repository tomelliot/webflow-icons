const React = require("react");
function CustomizeIcon({
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
    d: "M7 3.293A1 1 0 0 1 7.707 3H10.5a.5.5 0 0 1 .354.854L9 5.707V7h1.293l1.853-1.854A.5.5 0 0 1 13 5.5v2.793a1 1 0 0 1-.293.707L11 10.707a1 1 0 0 1-.707.293H7.707l-2.853 2.854a.5.5 0 0 1-.708 0l-2-2a.5.5 0 0 1 0-.708L5 8.293V5.707A1 1 0 0 1 5.293 5L7 3.293ZM9.293 4H7.707L6 5.707v2.586A1 1 0 0 1 5.707 9l-2.5 2.5L4.5 12.793l2.5-2.5A1 1 0 0 1 7.707 10h2.586L12 8.293V6.707l-1.146 1.147A.5.5 0 0 1 10.5 8h-2a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .146-.354L9.293 4Z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = React.forwardRef(CustomizeIcon);
module.exports = ForwardRef;