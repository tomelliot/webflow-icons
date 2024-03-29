const React = require("react");
function CapabilityPageBuilderIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React.createElement("path", {
    d: "M9.793 9a.5.5 0 0 1 .353.854l-4.292 4.292A.5.5 0 0 1 5 13.793V9.5a.5.5 0 0 1 .5-.5h4.293Z",
    opacity: 0.4
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5 5h14V4H5v1ZM3 8.5A1.5 1.5 0 0 1 4.5 7h15A1.5 1.5 0 0 1 21 8.5V14h-1V8.5a.5.5 0 0 0-.5-.5h-15a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .5.5H12v1H4.5A1.5 1.5 0 0 1 3 15.5v-7Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m14 11 7 7h-4l-3 3V11Z"
  }));
}
const ForwardRef = React.forwardRef(CapabilityPageBuilderIcon);
module.exports = ForwardRef;