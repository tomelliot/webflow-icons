const React = require("react");
function HomeIcon({
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
    d: "M8.354 1.646a.5.5 0 0 0-.708 0l-6.5 6.5.708.708L3 7.707V12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V7.707l1.146 1.147.708-.708-6.5-6.5ZM12 6.707l-4-4-4 4V12h8V6.707Z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = React.forwardRef(HomeIcon);
module.exports = ForwardRef;