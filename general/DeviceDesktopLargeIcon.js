const React = require("react");
function DeviceDesktopLargeIcon({
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
    fillRule: "evenodd",
    d: "M6 5.5A1.5 1.5 0 0 1 7.5 4h10A1.5 1.5 0 0 1 19 5.5v8a1.5 1.5 0 0 1-1.5 1.5H13v3h2.5v1h-6v-1H12v-3H7.5A1.5 1.5 0 0 1 6 13.5v-8ZM7.5 5a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5v-8a.5.5 0 0 0-.5-.5h-10Z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = React.forwardRef(DeviceDesktopLargeIcon);
module.exports = ForwardRef;