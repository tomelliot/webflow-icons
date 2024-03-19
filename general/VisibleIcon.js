const React = require("react");
function VisibleIcon({
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
    d: "M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M8 4a6.501 6.501 0 0 0-5.91 3.791.5.5 0 0 0 0 .418 6.501 6.501 0 0 0 11.82 0 .5.5 0 0 0 0-.418A6.501 6.501 0 0 0 8 4Zm0 7a5.5 5.5 0 0 1-4.9-3A5.5 5.5 0 0 1 8 5a5.5 5.5 0 0 1 4.9 3A5.5 5.5 0 0 1 8 11Z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = React.forwardRef(VisibleIcon);
module.exports = ForwardRef;