const React = require("react");
function ArchiveIcon({
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
    d: "M9.5 9h-3V8h3v1Z"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M3 2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1v6a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V6a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H3Zm9 4H4v6h8V6Zm1-1V3H3v2h10Z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = React.forwardRef(ArchiveIcon);
module.exports = ForwardRef;