const React = require("react");
function EasingPauseIcon({
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
    d: "M8.5 14a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13Zm1-4V5H11v5H9.5ZM6 10V5h1.5v5H6Z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = React.forwardRef(EasingPauseIcon);
module.exports = ForwardRef;