const React = require("react");
function PlaylistNextIcon({
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
    d: "M8.555 6.102A1 1 0 0 0 7 6.934v10.132a1 1 0 0 0 1.555.832L16 12.934V18h1V6h-1v5.066L8.555 6.102ZM15.599 12 8 17.066V6.934L15.599 12Z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = React.forwardRef(PlaylistNextIcon);
module.exports = ForwardRef;