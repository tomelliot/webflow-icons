const React = require("react");
function DragLeftIcon({
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
    d: "M10 3v10h1V3h-1ZM7 11V5h1v6H7ZM4 9V7h1v2H4Z"
  }));
}
const ForwardRef = React.forwardRef(DragLeftIcon);
module.exports = ForwardRef;