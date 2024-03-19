const React = require("react");
function BranchUpdateIcon({
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
    d: "M2 0v3.5A3.5 3.5 0 0 0 5.5 7h2.293L5.646 4.854l.708-.708L9.707 7.5l-3.353 3.354-.708-.708L7.793 8H5.5A4.5 4.5 0 0 1 1 3.5V0h1Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9 3h2v9H9v1h2a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H9v1Z"
  }));
}
const ForwardRef = React.forwardRef(BranchUpdateIcon);
module.exports = ForwardRef;