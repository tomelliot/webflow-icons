const React = require("react");
function EcommerceIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M7.71 10h8.58l-2.26-6.332.94-.336L17.353 10h2.454a1 1 0 0 1 .949 1.316l-2.553 7.658A1.5 1.5 0 0 1 16.78 20H7.221a1.5 1.5 0 0 1-1.423-1.026l-2.553-7.658A1 1 0 0 1 4.194 10h2.454l2.381-6.668.942.336L7.709 10Zm-3.516 1h15.612l-2.553 7.658a.5.5 0 0 1-.474.342H7.221a.5.5 0 0 1-.475-.342L4.194 11Z",
    clipRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m7.526 16.577-1.307-3.919A.5.5 0 0 1 6.694 12h2.612a.5.5 0 0 1 .475.658l-1.307 3.919a.5.5 0 0 1-.948 0Z",
    opacity: 0.4
  }));
}
const ForwardRef = React.forwardRef(EcommerceIcon);
module.exports = ForwardRef;