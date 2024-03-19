const React = require("react");
function EditIcon({
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
    d: "m11.146 6.854-2-2 .708-.708 2 2-.707.708Z",
    clipRule: "evenodd",
    opacity: 0.4
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M10.44 2.354a1.5 1.5 0 0 1 2.12 0l1.086 1.085a1.5 1.5 0 0 1 0 2.122L6.207 13H3V9.793l7.44-7.44Zm1.414.707a.5.5 0 0 0-.708 0L4 10.207V12h1.793l7.146-7.146a.5.5 0 0 0 0-.708l-1.085-1.085Z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = React.forwardRef(EditIcon);
module.exports = ForwardRef;