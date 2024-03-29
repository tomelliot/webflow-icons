const React = require("react");
function FreeIcon({
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
    d: "M5 4.01c0-1.137 1.605-1.376 1.936-.288L7.326 5H5.982A.99.99 0 0 1 5 4.01Zm5.017.99H8.675l.389-1.278C9.394 2.634 11 2.872 11 4.01a.99.99 0 0 1-.983.99Zm1.72 0H12a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h.263A1.98 1.98 0 0 1 4 4.01c0-2.287 3.227-2.767 3.893-.579L8 3.783l.107-.352C8.773 1.243 12 1.723 12 4.011c0 .36-.096.698-.263.989ZM8.675 6H12v6H8.5V6h.175ZM7.5 6H4v6h3.5V6Z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = React.forwardRef(FreeIcon);
module.exports = ForwardRef;