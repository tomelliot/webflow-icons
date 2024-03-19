const React = require("react");
function LikeFillIcon({
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
    d: "M2.879 3.879a3 3 0 0 1 4.242 0L8 4.757l.879-.878A3 3 0 1 1 13.12 8.12L8 13.243 2.879 8.12a3 3 0 0 1 0-4.242Z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = React.forwardRef(LikeFillIcon);
module.exports = ForwardRef;