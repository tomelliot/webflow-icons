const React = require("react");
function OAuthArrowIcon({
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
    d: "m12.854 6.146-2.5-2.5-.708.708L11.293 6H2v1h10.5a.5.5 0 0 0 .354-.854ZM2.146 9.854l2.5 2.5.708-.707L3.707 10H13V9H2.5a.5.5 0 0 0-.354.854Z"
  }));
}
const ForwardRef = React.forwardRef(OAuthArrowIcon);
module.exports = ForwardRef;