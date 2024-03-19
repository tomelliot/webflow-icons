const React = require("react");
function PlaylistPlayIcon({
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
    d: "M7.262 5.06a.5.5 0 0 1 .51.02l10 6.5a.5.5 0 0 1 0 .84l-10 6.5A.5.5 0 0 1 7 18.5v-13a.5.5 0 0 1 .262-.44ZM8 6.422V17.58L16.582 12 8 6.421Z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = React.forwardRef(PlaylistPlayIcon);
module.exports = ForwardRef;