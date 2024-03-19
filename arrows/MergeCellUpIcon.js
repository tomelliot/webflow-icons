const React = require("react");
function MergeCellUpIcon({
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
    d: "M15 4H2V3h13v1ZM8 7.707 5.854 9.854l-.708-.708L8.5 5.793l3.354 3.353-.708.708L9 7.707V13H8V7.707Z"
  }));
}
const ForwardRef = React.forwardRef(MergeCellUpIcon);
module.exports = ForwardRef;