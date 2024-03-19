const React = require("react");
function BranchMergeIcon({
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
    d: "M5.854 5.826 8 3.68v4.586l-4.88 4.88.706.708 5.028-5.028A.5.5 0 0 0 9 8.473V3.68l2.146 2.146.708-.707L8.5 1.766 5.146 5.119l.708.707ZM8.646 10.354l3.5 3.5.708-.707-3.5-3.5-.708.707Z"
  }));
}
const ForwardRef = React.forwardRef(BranchMergeIcon);
module.exports = ForwardRef;