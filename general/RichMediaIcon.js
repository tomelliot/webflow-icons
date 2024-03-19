const React = require("react");
function RichMediaIcon({
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
    d: "M5 2.5a.5.5 0 0 1 .5-.5H8v1H6v5.5h-.018A1.75 1.75 0 1 1 5 6.668V2.5Z"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M11 4a3 3 0 0 1 2.572 4.546L11 13 8.429 8.546A3 3 0 0 1 11 4Zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = React.forwardRef(RichMediaIcon);
module.exports = ForwardRef;