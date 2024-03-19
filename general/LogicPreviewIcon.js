const React = require("react");
function LogicPreviewIcon({
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
    d: "M4 3.419a1 1 0 0 1 1.521-.853l7.542 4.608a1 1 0 0 1 0 1.707L5.52 13.489A1 1 0 0 1 4 12.636V3.419Zm8.541 4.608L5 3.42v9.217l7.541-4.609Z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = React.forwardRef(LogicPreviewIcon);
module.exports = ForwardRef;