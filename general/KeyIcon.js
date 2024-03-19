const React = require("react");
function KeyIcon({
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
    d: "M10.5 6.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M10 2a4 4 0 0 0-3.849 5.092.09.09 0 0 1 .002.043c0 .004-.002.007-.002.007L3.293 10a1 1 0 0 0-.293.707V12a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-1h1a1 1 0 0 0 1-1h1a4 4 0 0 0 0-8ZM7 6a3 3 0 1 1 3 3H9a1 1 0 0 0-1 1H7a1 1 0 0 0-1 1v1H4v-1.293L6.859 7.85c.286-.287.35-.69.254-1.03A3.003 3.003 0 0 1 7 6Z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = React.forwardRef(KeyIcon);
module.exports = ForwardRef;