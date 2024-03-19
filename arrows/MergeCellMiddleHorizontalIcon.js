const React = require("react");
function MergeCellMiddleHorizontalIcon({
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
    d: "M8 1h1v13H8V1ZM11.707 7l2.147-2.146-.708-.708L9.793 7.5l3.353 3.354.708-.708L11.707 8H16V7h-4.293ZM5.293 7 3.146 4.854l.708-.708L7.207 7.5l-3.353 3.354-.708-.708L5.293 8H1V7h4.293Z"
  }));
}
const ForwardRef = React.forwardRef(MergeCellMiddleHorizontalIcon);
module.exports = ForwardRef;