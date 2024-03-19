const React = require("react");
function VideoTutorialsIcon({
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
    stroke: "#F5F5F5",
    d: "M5 3.5a2 2 0 0 1 2 2 2 2 0 1 1 3.5 1.323V8l3.324-1.247a.5.5 0 0 1 .676.468v4.557a.5.5 0 0 1-.676.469L10.5 11v1a.5.5 0 0 1-.5.5H4a.5.5 0 0 1-.5-.5V6.823A2 2 0 0 1 5 3.5Z"
  }));
}
const ForwardRef = React.forwardRef(VideoTutorialsIcon);
module.exports = ForwardRef;