const React = require("react");
function PageBranchedIcon({
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
    d: "M2 3a1 1 0 0 1 1-1h4.707L12 6.293V9h-1V6.707L7.293 3H3v10h2v1H3a1 1 0 0 1-1-1V3Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14 12h-3.793l2 2H14v1h-1.793a1 1 0 0 1-.707-.293L8.793 12H7v-1h7v1Z"
  }));
}
const ForwardRef = React.forwardRef(PageBranchedIcon);
module.exports = ForwardRef;