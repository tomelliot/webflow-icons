const React = require("react");
function CollapseIcon({
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
    fillRule: "evenodd",
    d: "M11.146 3.146 8.5 5.793 5.854 3.146l-.708.708 3 3 .354.353.354-.353 3-3-.707-.708Zm0 9.708L8.5 10.207l-2.646 2.646-.708-.707 3-3 .354-.353.354.353 3 3-.707.707Z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = React.forwardRef(CollapseIcon);
module.exports = ForwardRef;