const React = require("react");
function UnlinkIcon({
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
    d: "m5.854 4.145-2-1.999-.706.708 1.998 1.998.708-.707ZM11.5 10.5H14v-1h-2.5v1ZM2 5.499h2.5v1H2v-1ZM10.146 11.854l2 2 .708-.707-2-2-.708.707ZM5.854 7.854l-1 1a1.621 1.621 0 1 0 2.292 2.293l1-1 .708.707-1 1a2.621 2.621 0 1 1-3.708-3.707l1-1 .708.707ZM11.854 4.147a2.621 2.621 0 0 0-3.708 0l-1 1 .708.707 1-1a1.621 1.621 0 1 1 2.292 2.293l-1 1 .708.707 1-1a2.621 2.621 0 0 0 0-3.707Z"
  }));
}
const ForwardRef = React.forwardRef(UnlinkIcon);
module.exports = ForwardRef;