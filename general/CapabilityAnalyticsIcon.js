const React = require("react");
function CapabilityAnalyticsIcon({
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
  }, title) : null, /*#__PURE__*/React.createElement("g", {
    opacity: 0.4
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 6.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v4l-3 3v-7ZM7 17.5a.5.5 0 0 0 .5.5H10v-.5l-3-3v3ZM15 17.5a.5.5 0 0 1-.5.5h-2l2.5-2.5v2ZM10 10.5a.5.5 0 0 0-.5-.5h-2l2.5 2.5v-2Z"
  })), /*#__PURE__*/React.createElement("path", {
    d: "M5 12.293V4H4v14.5A1.5 1.5 0 0 0 5.5 20H20v-1H5.5a.5.5 0 0 1-.5-.5v-4.793l1.5-1.5 4.646 4.647a.5.5 0 0 0 .708 0L20 8.707V12h1V7h-5v1h3.293L11.5 15.793l-4.646-4.647a.5.5 0 0 0-.708 0L5 12.293Z"
  }));
}
const ForwardRef = React.forwardRef(CapabilityAnalyticsIcon);
module.exports = ForwardRef;