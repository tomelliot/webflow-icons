const React = require("react");
function PlaylistPrevIcon({
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
    d: "M15.445 6.102A1 1 0 0 1 17 6.934v10.132a1 1 0 0 1-1.555.832L8 12.934V18H7V6h1v5.066l7.445-4.964ZM8.401 12 16 17.066V6.934L8.401 12Z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = React.forwardRef(PlaylistPrevIcon);
module.exports = ForwardRef;