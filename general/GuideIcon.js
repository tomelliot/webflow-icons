const React = require("react");
function GuideIcon({
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
    d: "M2 2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h2.136a4 4 0 0 1 2.828 1.172l.329.328a1 1 0 0 0 1.414 0l.329-.328A4 4 0 0 1 11.864 13H14a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1h-2.136a5 5 0 0 0-3.536 1.464L8 3.793l-.328-.329A5 5 0 0 0 4.136 2H2Zm0 1h2.136a4 4 0 0 1 2.828 1.172l.536.535v8.594A5 5 0 0 0 4.136 12H2V3Zm6.5 10.3a5 5 0 0 1 3.364-1.3H14V3h-2.136a4 4 0 0 0-2.828 1.172l-.536.535v8.594Z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = React.forwardRef(GuideIcon);
module.exports = ForwardRef;