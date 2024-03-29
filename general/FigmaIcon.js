const React = require("react");
function FigmaIcon({
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
    d: "M5 10.5a2.496 2.496 0 0 1-1-2c0-.818.393-1.544 1-2A2.5 2.5 0 0 1 6.5 2h4A2.5 2.5 0 0 1 12 6.5a2.5 2.5 0 0 1-3 4v2a2.5 2.5 0 1 1-4-2ZM8 3H6.5a1.5 1.5 0 1 0 0 3H8V3ZM6.5 7H8v3H6.5a1.5 1.5 0 1 1 0-3Zm0 4A1.5 1.5 0 1 0 8 12.5V11H6.5ZM9 8.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm3-4A1.5 1.5 0 0 1 10.5 6H9V3h1.5A1.5 1.5 0 0 1 12 4.5Z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = React.forwardRef(FigmaIcon);
module.exports = ForwardRef;