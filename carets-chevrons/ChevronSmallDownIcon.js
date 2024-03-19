const React = require("react");
function ChevronSmallDownIcon({
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
    d: "m8 9.293 2.646-2.647.707.708L8 10.707 4.646 7.354l.708-.708L8 9.293Z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = React.forwardRef(ChevronSmallDownIcon);
module.exports = ForwardRef;