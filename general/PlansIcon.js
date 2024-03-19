const React = require("react");
function PlansIcon({
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
    d: "m8 2 1.347 4.146h4.36L10.18 8.708l1.347 4.146L8 10.292l-3.527 2.562L5.82 8.708 2.294 6.146h4.359L8 2Z"
  }));
}
const ForwardRef = React.forwardRef(PlansIcon);
module.exports = ForwardRef;