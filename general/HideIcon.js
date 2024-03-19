const React = require("react");
function HideIcon({
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
    d: "m10.705 11.412 2.941 2.942.708-.707-12-12-.708.707 2.742 2.741A6.527 6.527 0 0 0 2.09 7.792a.5.5 0 0 0 0 .417 6.5 6.5 0 0 0 8.615 3.203Zm-.764-.764-4.83-4.83A5.525 5.525 0 0 0 3.1 8a5.5 5.5 0 0 0 6.84 2.648Z",
    clipRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13.91 8.209a6.515 6.515 0 0 1-1.357 1.93l-.707-.707A5.52 5.52 0 0 0 12.9 8a5.5 5.5 0 0 0-5.458-2.972l-.87-.87a6.5 6.5 0 0 1 7.339 3.634.5.5 0 0 1 0 .417Z"
  }));
}
const ForwardRef = React.forwardRef(HideIcon);
module.exports = ForwardRef;