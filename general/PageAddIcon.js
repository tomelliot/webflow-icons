const React = require("react");
function PageAddIcon({
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
    d: "M4 2a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h3v-1H4V3h4.293L12 6.707V8h1V6.293L8.707 2H4Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M11 14h-1v-2H8v-1h2V9h1v2h2v1h-2v2Z"
  }));
}
const ForwardRef = React.forwardRef(PageAddIcon);
module.exports = ForwardRef;