const React = require("react");
function FolderAddIcon({
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
    d: "M2 4a1 1 0 0 1 1-1h3.707l2 2H13a1 1 0 0 1 1 1v1.5h-1V6H8.293l-2-2H3v8h5.5v1H3a1 1 0 0 1-1-1V4Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13 11V9h-1v2h-2v1h2v2h1v-2h2v-1h-2Z"
  }));
}
const ForwardRef = React.forwardRef(FolderAddIcon);
module.exports = ForwardRef;