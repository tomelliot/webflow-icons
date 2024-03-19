const React = require("react");
function BrushIcon({
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
    d: "m8.442 8.446 5.5-5.5-.884-.884-5.5 5.5.884.884ZM2 13l1.482-1.48c.332-.332.518-.782.518-1.25 0-.977.791-1.768 1.768-1.768H6a2 2 0 0 1 2 2v.25a2.25 2.25 0 0 1-2.25 2.25L2 13Z"
  }));
}
const ForwardRef = React.forwardRef(BrushIcon);
module.exports = ForwardRef;