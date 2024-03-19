const React = require("react");
function EmailIcon({
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
    d: "M3 3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H3Zm9.293 1H3.707L8 8.293 12.293 4ZM3 4.707V12h10V4.707L8.707 9a1 1 0 0 1-1.414 0L3 4.707Z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = React.forwardRef(EmailIcon);
module.exports = ForwardRef;