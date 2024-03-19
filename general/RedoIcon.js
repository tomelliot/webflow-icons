const React = require("react");
function RedoIcon({
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
    d: "M12.293 5 9.646 2.354l.708-.708L14.207 5.5l-3.853 3.854-.708-.708L12.293 6H6a3 3 0 1 0 0 6h2v1H6a4 4 0 1 1 0-8h6.293Z"
  }));
}
const ForwardRef = React.forwardRef(RedoIcon);
module.exports = ForwardRef;