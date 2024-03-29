const React = require("react");
function CmsInsertIcon({
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
    d: "M10 2c-1.311 0-2.523.294-3.425.795C5.69 3.287 5 4.045 5 5v6c0 .954.69 1.713 1.575 2.205.902.5 2.114.795 3.425.795s2.523-.294 3.425-.795C14.31 12.713 15 11.955 15 11V5c0-.954-.69-1.713-1.575-2.205C12.523 2.295 11.31 2 10 2Zm4 3c0-.426-.317-.917-1.06-1.33C12.211 3.264 11.173 3 10 3s-2.212.265-2.94.67C6.318 4.082 6 4.573 6 5c0 .426.317.917 1.06 1.33.728.405 1.766.67 2.94.67s2.212-.265 2.94-.67C13.682 5.918 14 5.427 14 5ZM6 6.823c.177.14.371.268.575.382C7.477 7.705 8.69 8 10 8s2.523-.294 3.425-.795c.204-.114.398-.241.575-.382V11c0 .426-.317.917-1.06 1.33-.728.405-1.766.67-2.94.67s-2.212-.265-2.94-.67C6.318 11.918 6 11.427 6 11V6.823Z",
    clipRule: "evenodd",
    opacity: 0.5
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 8H0v1h3V8ZM10 10c-1.174 0-2.212-.265-2.94-.67C6.318 8.918 6 8.427 6 8H5c0 .954.69 1.713 1.575 2.205.902.5 2.114.795 3.425.795s2.523-.294 3.425-.795C14.31 9.713 15 8.955 15 8h-1c0 .426-.317.917-1.06 1.33-.728.405-1.766.67-2.94.67Z"
  }));
}
const ForwardRef = React.forwardRef(CmsInsertIcon);
module.exports = ForwardRef;