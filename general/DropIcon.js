const React = require("react");
function DropIcon({
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
    d: "M13 4h-2.5A3.5 3.5 0 0 0 7 7.5v3.793l3.146-3.147.708.708L6.5 13.207 2.146 8.854l.708-.708L6 11.293V7.5A4.5 4.5 0 0 1 10.5 3H13v1Z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = React.forwardRef(DropIcon);
module.exports = ForwardRef;