const React = require("react");
function HelpIcon({
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
    d: "M12.5 4a7.5 7.5 0 1 0 0 15 7.5 7.5 0 0 0 0-15ZM4 11.5a8.5 8.5 0 1 1 17 0 8.5 8.5 0 0 1-17 0Z",
    clipRule: "evenodd",
    opacity: 0.4
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12.5 7A2.5 2.5 0 0 0 10 9.5v.5h1v-.5a1.5 1.5 0 0 1 3 0v.172a1.5 1.5 0 0 1-.44 1.06l-.828.829A2.5 2.5 0 0 0 12 13.328v.172h1v-.172c0-.397.158-.779.44-1.06l.828-.829A2.5 2.5 0 0 0 15 9.672V9.5A2.5 2.5 0 0 0 12.5 7ZM12.5 16.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
  }));
}
const ForwardRef = React.forwardRef(HelpIcon);
module.exports = ForwardRef;