const React = require("react");
function SearchDefaultIcon({
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
    d: "M7.563 4a3.563 3.563 0 1 0 0 7.127 3.563 3.563 0 0 0 0-7.127ZM3 7.563a4.563 4.563 0 1 1 8.124 2.854l2.73 2.73-.708.707-2.729-2.73A4.563 4.563 0 0 1 3 7.563Z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = React.forwardRef(SearchDefaultIcon);
module.exports = ForwardRef;