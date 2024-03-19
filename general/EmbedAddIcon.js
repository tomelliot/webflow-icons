const React = require("react");
function EmbedAddIcon({
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
    d: "M6.146 11.854A.5.5 0 0 0 7 11.5v-7a.5.5 0 0 0-.854-.354l-3.5 3.5a.5.5 0 0 0 0 .708l3.5 3.5ZM6 5.707v4.586L3.707 8 6 5.707Z",
    clipRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9.646 10.646 12.293 8 9.646 5.354l.708-.708L13.707 8l-3.353 3.354-.708-.707Z"
  }));
}
const ForwardRef = React.forwardRef(EmbedAddIcon);
module.exports = ForwardRef;