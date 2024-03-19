const React = require("react");
function SwapIcon({
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
    d: "m9.707 6 2.147 2.146-.708.708L7.793 5.5l3.353-3.354.708.708L9.707 5H15v1H9.707ZM6.293 10l-2.147 2.146.708.708L8.207 9.5 4.854 6.146l-.708.708L6.293 9H1v1h5.293Z"
  }));
}
const ForwardRef = React.forwardRef(SwapIcon);
module.exports = ForwardRef;