const React = require("react");
function ChevronLargeDownIcon({
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
    d: "m8 9.293 3.646-3.647.707.708L8 10.707 3.646 6.354l.708-.708L8 9.293Z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = React.forwardRef(ChevronLargeDownIcon);
module.exports = ForwardRef;