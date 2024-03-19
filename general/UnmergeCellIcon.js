const React = require("react");
function UnmergeCellIcon({
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
    d: "M7.293 8 5.646 6.354l.708-.708L8 7.293l1.646-1.647.708.708L8.707 8l1.647 1.646-.708.708L8 8.707l-1.646 1.647-.708-.708L7.293 8Z",
    clipRule: "evenodd"
  }), /*#__PURE__*/React.createElement("g", {
    opacity: 0.4
  }, /*#__PURE__*/React.createElement("path", {
    d: "M6 3H3v10h3v-1.5h1V13a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v1.5H6V3ZM9 11.5V13a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1h-3a1 1 0 0 0-1 1v1.5h1V3h3v10h-3v-1.5H9Z"
  })));
}
const ForwardRef = React.forwardRef(UnmergeCellIcon);
module.exports = ForwardRef;