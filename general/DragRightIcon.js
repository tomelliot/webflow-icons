const React = require("react");
function DragRightIcon({
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
    d: "M5 3v10h1V3H5ZM8 11V5h1v6H8ZM11 9V7h1v2h-1Z"
  }));
}
const ForwardRef = React.forwardRef(DragRightIcon);
module.exports = ForwardRef;