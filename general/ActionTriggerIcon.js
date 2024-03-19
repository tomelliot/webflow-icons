const React = require("react");
function ActionTriggerIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 13 13",
    fill: "currentColor",
    "aria-hidden": "true",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M1 0a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1H1Zm5.5 2v3.5h2.59a.5.5 0 0 1 .421.768L6.5 11V7.5H3.91a.5.5 0 0 1-.421-.768L6.5 2Z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = React.forwardRef(ActionTriggerIcon);
module.exports = ForwardRef;