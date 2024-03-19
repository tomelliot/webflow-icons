const React = require("react");
function DeviceDesktopXlIcon({
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
    d: "M6 4a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h4v3H7.5v1h10v-1H15v-3h4a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H6Zm5 14h3v-3h-3v3ZM6 5h13v9H6V5Z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = React.forwardRef(DeviceDesktopXlIcon);
module.exports = ForwardRef;