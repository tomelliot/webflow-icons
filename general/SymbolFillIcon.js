const React = require("react");
function SymbolFillIcon({
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
    d: "M13.235 2.84a1.5 1.5 0 0 0-1.47 0l-7 3.938A1.5 1.5 0 0 0 4 8.085v7.83a1.5 1.5 0 0 0 .765 1.308l7 3.937a1.5 1.5 0 0 0 1.47 0l7-3.937A1.5 1.5 0 0 0 21 15.915v-7.83a1.5 1.5 0 0 0-.765-1.307l-7-3.938Zm-.98.872a.5.5 0 0 1 .49 0L19.48 7.5l-6.98 3.926L5.52 7.5l6.735-3.788ZM5 8.355v7.56a.5.5 0 0 0 .255.436L12 20.145v-7.852L5 8.354Zm8 11.79 6.745-3.794a.5.5 0 0 0 .255-.436v-7.56l-7 3.938v7.852Z",
    clipRule: "evenodd"
  }), /*#__PURE__*/React.createElement("g", {
    opacity: 0.4
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12.5 9.617a.5.5 0 0 1-.757.429L8.215 7.929a.5.5 0 0 1 0-.858l3.528-2.117a.5.5 0 0 1 .757.43v4.233ZM10.285 13.429a.5.5 0 0 0 0-.858l-3.528-2.117a.5.5 0 0 0-.757.43v4.233a.5.5 0 0 0 .757.429l3.528-2.117Z"
  })));
}
const ForwardRef = React.forwardRef(SymbolFillIcon);
module.exports = ForwardRef;