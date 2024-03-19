const React = require("react");
function PhoneIcon({
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
    d: "M4.853 3.146a.5.5 0 0 0-.707 0l-.586.586a2.5 2.5 0 0 0 0 3.536l5.172 5.171a2.5 2.5 0 0 0 3.536 0l.585-.585a.5.5 0 0 0 0-.708l-2-2a.5.5 0 0 0-.707 0L8.5 10.793 5.207 7.5l1.646-1.646a.5.5 0 0 0 0-.708l-2-2Z"
  }));
}
const ForwardRef = React.forwardRef(PhoneIcon);
module.exports = ForwardRef;