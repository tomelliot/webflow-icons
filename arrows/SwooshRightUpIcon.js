const React = require("react");
function SwooshRightUpIcon({
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
    d: "M9 3.707 5.854 6.854l-.708-.707L9.5 1.793l4.354 4.354-.708.707L10 3.707V8.5A4.5 4.5 0 0 1 5.5 13H4v-1h1.5A3.5 3.5 0 0 0 9 8.5V3.707Z"
  }));
}
const ForwardRef = React.forwardRef(SwooshRightUpIcon);
module.exports = ForwardRef;