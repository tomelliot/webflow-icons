const React = require("react");
function InteractionsDefaultIcon({
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
    d: "M8 7V2.5L4.469 8.238A.5.5 0 0 0 4.895 9H8v4.5l3.531-5.738A.5.5 0 0 0 11.105 7H8Z"
  }));
}
const ForwardRef = React.forwardRef(InteractionsDefaultIcon);
module.exports = ForwardRef;