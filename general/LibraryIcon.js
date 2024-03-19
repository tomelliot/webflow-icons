const React = require("react");
function LibraryIcon({
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
    d: "M1.5 5a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z",
    clipRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5 9v2h2v1H5v2H4v-2H2v-1h2V9h1Z"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M10 9a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-3Zm0 4v-3h3v3h-3ZM12.378 2.565a1 1 0 0 0-1.756 0L8.464 6.521A1 1 0 0 0 9.342 8h4.316a1 1 0 0 0 .878-1.479l-2.158-3.956Zm-.878.48L13.658 7H9.342L11.5 3.044Z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = React.forwardRef(LibraryIcon);
module.exports = ForwardRef;