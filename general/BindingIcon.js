const React = require("react");
function BindingIcon({
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
    d: "M8 13V9.5a.5.5 0 0 1 1 0V13H8Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8 6.035V3h1v3.035A3.5 3.5 0 0 1 12 9.5h-1a2.5 2.5 0 0 0-5 0H5a3.5 3.5 0 0 1 3-3.465Z"
  }));
}
const ForwardRef = React.forwardRef(BindingIcon);
module.exports = ForwardRef;