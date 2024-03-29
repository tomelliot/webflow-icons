const React = require("react");
function StyleManagerIcon({
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
    d: "M6.567 7.116c.256-.443.933-.262.933.25V9.5c0 .276-.23.508-.49.418a1.5 1.5 0 0 1-.796-2.19l.353-.612ZM11.067 17.116c.256-.443.933-.261.933.25V19.5c0 .276-.23.508-.49.418a1.5 1.5 0 0 1-.796-2.191l.353-.611ZM16.01 9.918c.26.09.49-.142.49-.418V7.366c0-.512-.677-.693-.933-.25l-.353.61a1.5 1.5 0 0 0 .795 2.191Z"
  })), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M4 8.5a3.5 3.5 0 1 0 6.502-1.8L8.366 3a1 1 0 0 0-1.732 0L4.498 6.7A3.51 3.51 0 0 0 4 8.5ZM7.5 11a2.5 2.5 0 0 1-2.143-3.788l.005-.008L7.5 3.5l2.143 3.712A2.5 2.5 0 0 1 7.5 11ZM13 8.5a3.5 3.5 0 1 0 6.503-1.8L17.366 3a1 1 0 0 0-1.732 0l-2.136 3.7A3.51 3.51 0 0 0 13 8.5Zm3.5 2.5a2.5 2.5 0 0 1-2.143-3.788l.005-.008L16.5 3.5l2.143 3.712A2.5 2.5 0 0 1 16.5 11ZM12 22a3.5 3.5 0 0 1-3.002-5.3l2.136-3.7a1 1 0 0 1 1.732 0l2.136 3.7A3.5 3.5 0 0 1 12 22Zm-2.5-3.5a2.5 2.5 0 1 0 4.643-1.288l-.004-.008L12 13.5l-2.138 3.704-.005.008A2.51 2.51 0 0 0 9.5 18.5Z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = React.forwardRef(StyleManagerIcon);
module.exports = ForwardRef;