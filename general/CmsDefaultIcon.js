const React = require("react");
function CmsDefaultIcon({
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
    d: "M4.575 2.795C5.477 2.295 6.69 2 8 2s2.523.294 3.425.795C12.31 3.287 13 4.045 13 5v6c0 .954-.69 1.713-1.575 2.205-.902.5-2.114.795-3.425.795s-2.523-.294-3.425-.795C3.69 12.713 3 11.955 3 11V5c0-.954.69-1.713 1.575-2.205ZM4 9.823V11c0 .426.317.917 1.06 1.33.728.405 1.766.67 2.94.67s2.212-.265 2.94-.67c.743-.413 1.06-.904 1.06-1.33V9.823a4.203 4.203 0 0 1-.575.382C10.523 10.705 9.31 11 8 11s-2.523-.294-3.425-.795A4.205 4.205 0 0 1 4 9.823ZM12 8c0 .426-.317.917-1.06 1.33-.728.405-1.766.67-2.94.67s-2.212-.265-2.94-.67C4.318 8.918 4 8.427 4 8V6.823c.177.14.371.268.575.382C5.477 7.705 6.69 8 8 8s2.523-.294 3.425-.795c.204-.114.398-.241.575-.382V8Zm-1.06-4.33C11.682 4.082 12 4.573 12 5c0 .426-.317.917-1.06 1.33C10.211 6.736 9.173 7 8 7s-2.212-.265-2.94-.67C4.318 5.918 4 5.427 4 5c0-.426.317-.917 1.06-1.33C5.789 3.264 6.827 3 8 3s2.212.265 2.94.67Z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = React.forwardRef(CmsDefaultIcon);
module.exports = ForwardRef;