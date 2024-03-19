const React = require("react");
function ChevronSmallLeftIcon({
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
    d: "m6.707 8 2.647-2.646-.708-.708L5.293 8l3.353 3.354.708-.707L6.707 8Z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = React.forwardRef(ChevronSmallLeftIcon);
module.exports = ForwardRef;