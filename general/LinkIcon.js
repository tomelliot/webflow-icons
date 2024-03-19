const React = require("react");
function LinkIcon({
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
    d: "M8.147 4.147a2.621 2.621 0 0 1 3.707 3.707l-1 1-.707-.707 1-1a1.621 1.621 0 0 0-2.293-2.293l-1 1-.707-.707 1-1ZM5.854 7.854l-1 1a1.621 1.621 0 0 0 2.293 2.293l1-1 .707.707-1 1a2.621 2.621 0 1 1-3.707-3.707l1-1 .707.707Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m6.854 9.854 3-3-.707-.707-3 3 .707.707Z"
  }));
}
const ForwardRef = React.forwardRef(LinkIcon);
module.exports = ForwardRef;