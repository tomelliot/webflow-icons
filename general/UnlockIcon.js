const React = require("react");
function UnlockIcon({
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
    d: "M9 5a2 2 0 1 1 4 0v1h1V5a3 3 0 1 0-6 0v2H3a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1V5ZM3 8h6v4H3V8Z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = React.forwardRef(UnlockIcon);
module.exports = ForwardRef;