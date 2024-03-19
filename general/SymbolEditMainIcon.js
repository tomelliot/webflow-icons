const React = require("react");
function SymbolEditMainIcon({
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
    d: "M7.02 1.692a1 1 0 0 0-.957 0L1.26 4.312A.5.5 0 0 0 1 4.75v5.203a1 1 0 0 0 .521.878l4.042 2.205a1 1 0 0 0 1.479-.878V7.797l3.976-2.17a1 1 0 0 0 0-1.755l-3.997-2.18ZM6.543 6.93l3.997-2.18-3.997-2.18-3.998 2.18 3.998 2.18ZM2 5.592l4.042 2.205v4.36L2 9.954v-4.36Z",
    clipRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9 13h.707l4.647-4.646-.708-.708L9 12.293V13Z"
  }));
}
const ForwardRef = React.forwardRef(SymbolEditMainIcon);
module.exports = ForwardRef;