const React = require("react");
function NavigatorIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React.createElement("path", {
    d: "M2 7h15V6H2v1ZM22 12H7v-1h15v1ZM22 17H7v-1h15v1Z"
  }));
}
const ForwardRef = React.forwardRef(NavigatorIcon);
module.exports = ForwardRef;