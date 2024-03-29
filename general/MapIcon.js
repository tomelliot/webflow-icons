const React = require("react");
function MapIcon({
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
    d: "M8 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M7.62 14.076a.5.5 0 0 0 .76 0l.102-.12a210.543 210.543 0 0 1 1.18-1.355c.696-.794 1.48-1.672 1.873-2.066a5 5 0 1 0-7.071 0c.394.394 1.178 1.272 1.875 2.066a218.389 218.389 0 0 1 1.18 1.356l.102.119ZM4 7a4 4 0 1 1 6.828 2.828c-.42.421-1.228 1.327-1.918 2.114-.348.396-.67.766-.905 1.038L8 12.985l-.005-.005c-.235-.272-.557-.642-.905-1.039-.69-.786-1.497-1.692-1.918-2.113A3.986 3.986 0 0 1 4 7Z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = React.forwardRef(MapIcon);
module.exports = ForwardRef;