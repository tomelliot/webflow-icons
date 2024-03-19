const React = require("react");
function ContinuousEventIcon({
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
    d: "M3.964 11.536A5 5 0 0 1 7.5 3V2h-5v1h1.682A5.994 5.994 0 0 0 1.5 8c0 1.657.672 3.157 1.757 4.243l.707-.707ZM13 8c0-1.38-.56-2.63-1.464-3.536l.707-.707A5.983 5.983 0 0 1 14 8a5.994 5.994 0 0 1-2.682 5H13v1H8v-1a5 5 0 0 0 5-5Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8 7V3.5L5.403 8.26a.5.5 0 0 0 .44.74H8v3.5l2.597-4.76a.5.5 0 0 0-.44-.74H8Z"
  }));
}
const ForwardRef = React.forwardRef(ContinuousEventIcon);
module.exports = ForwardRef;