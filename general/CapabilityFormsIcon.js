const React = require("react");
function CapabilityFormsIcon({
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
    d: "M15.5 4H14v1h1.5A1.5 1.5 0 0 1 17 6.5v11a1.5 1.5 0 0 1-1.5 1.5H14v1h1.5c.818 0 1.544-.393 2-1 .456.607 1.182 1 2 1H21v-1h-1.5a1.5 1.5 0 0 1-1.5-1.5v-11A1.5 1.5 0 0 1 19.5 5H21V4h-1.5c-.818 0-1.544.393-2 1a2.496 2.496 0 0 0-2-1Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5 8.5a.5.5 0 0 1 .5-.5H15V7H5.5A1.5 1.5 0 0 0 4 8.5v7A1.5 1.5 0 0 0 5.5 17H15v-1H5.5a.5.5 0 0 1-.5-.5v-7Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10.793 9a.5.5 0 0 1 .353.854l-4.292 4.292A.5.5 0 0 1 6 13.793V9.5a.5.5 0 0 1 .5-.5h4.293Z",
    opacity: 0.4
  }));
}
const ForwardRef = React.forwardRef(CapabilityFormsIcon);
module.exports = ForwardRef;