const React = require("react");
function InteractionsOffIcon({
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
    d: "m9.826 10.533 3.82 3.82.708-.707-12-12-.708.708 3.99 3.989-1.167 1.895A.5.5 0 0 0 4.895 9H8v4.5l1.826-2.967ZM11.531 7.762l-.516.839L9.415 7h1.69a.5.5 0 0 1 .426.762ZM8 2.5v3.086L6.824 4.41 8 2.5Z"
  }));
}
const ForwardRef = React.forwardRef(InteractionsOffIcon);
module.exports = ForwardRef;