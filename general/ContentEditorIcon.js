const React = require("react");
function ContentEditorIcon({
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
    d: "M5 5a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z",
    clipRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4.5 10A1.5 1.5 0 0 0 3 11.5V13H2v-1.5A2.5 2.5 0 0 1 4.5 9H8v1H4.5ZM9 13h.707l4.647-4.646-.708-.708L9 12.293V13Z"
  }));
}
const ForwardRef = React.forwardRef(ContentEditorIcon);
module.exports = ForwardRef;