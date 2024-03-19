const React = require("react");
function MenuIcon({
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
    fillRule: "evenodd",
    d: "M19 7H5V6h14v1Zm0 5H5v-1h14v1Zm0 5H5v-1h14v1Z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = React.forwardRef(MenuIcon);
module.exports = ForwardRef;