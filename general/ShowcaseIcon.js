const React = require("react");
function ShowcaseIcon({
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
    d: "M4.293 2 2 4.293V6a2 2 0 0 0 3.937.5h.126a2 2 0 0 0 3.874 0h.126A2 2 0 0 0 14 6V4.293L11.707 2H4.293ZM3 4.707 4.707 3h6.586L13 4.707V6a1 1 0 1 1-2 0v-.5H9V6a1 1 0 0 1-2 0v-.5H5V6a1 1 0 0 1-2 0V4.707Z",
    clipRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4 12V9H3v3a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V9h-1v3H4Z"
  }));
}
const ForwardRef = React.forwardRef(ShowcaseIcon);
module.exports = ForwardRef;