const React = require("react");
function LogoutIcon({
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
    d: "M7 3H3v9h4v1H3a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h4v1Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10.146 10.146 12.293 8H5.5V7h6.793l-2.147-2.146.708-.708L14.207 7.5l-3.353 3.354-.708-.708Z"
  }));
}
const ForwardRef = React.forwardRef(LogoutIcon);
module.exports = ForwardRef;