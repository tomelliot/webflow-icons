const React = require("react");
function DeviceLaptopIcon({
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
    d: "M4 17V7.5A1.5 1.5 0 0 1 5.5 6h13A1.5 1.5 0 0 1 20 7.5V17l3 .027v1H1v-1L4 17Zm1-9.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 .5.5V17H5V7.5Z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = React.forwardRef(DeviceLaptopIcon);
module.exports = ForwardRef;