const React = require("react");
function ChevronSmallRightIcon({
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
    d: "M9.293 8 6.646 5.354l.708-.708L10.707 8l-3.353 3.354-.708-.707L9.293 8Z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = React.forwardRef(ChevronSmallRightIcon);
module.exports = ForwardRef;