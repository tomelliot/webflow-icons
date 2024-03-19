const React = require("react");
function ChevronSmallUpIcon({
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
    d: "m8 6.707 2.646 2.647.707-.708L8 5.293 4.646 8.646l.708.708L8 6.707Z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = React.forwardRef(ChevronSmallUpIcon);
module.exports = ForwardRef;