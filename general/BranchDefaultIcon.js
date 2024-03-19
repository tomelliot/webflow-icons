const React = require("react");
function BranchDefaultIcon({
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
    d: "M5.232 4H2V3h3.232a1 1 0 0 1 .832.445L9.768 9h3.525l-2.147-2.146.708-.708L15.207 9.5l-3.353 3.354-.708-.708L13.293 10H9.768a1 1 0 0 1-.832-.445L5.232 4ZM14 4H8V3h6v1Z"
  }));
}
const ForwardRef = React.forwardRef(BranchDefaultIcon);
module.exports = ForwardRef;