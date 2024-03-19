const React = require("react");
function CmsSandwichIcon({
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
    d: "M6.575 2.795C7.477 2.295 8.69 2 10 2s2.523.294 3.425.795C14.31 3.287 15 4.045 15 5v6c0 .954-.69 1.713-1.575 2.205-.902.5-2.114.795-3.425.795s-2.523-.294-3.425-.795C5.69 12.713 5 11.955 5 11V5c0-.954.69-1.713 1.575-2.205ZM6 9.823V11c0 .426.317.917 1.06 1.33.728.405 1.766.67 2.94.67s2.212-.265 2.94-.67c.743-.413 1.06-.904 1.06-1.33V9.823a4.203 4.203 0 0 1-.575.382c-.902.5-2.114.795-3.425.795s-2.523-.294-3.425-.795A4.205 4.205 0 0 1 6 9.823ZM14 8c0 .426-.317.917-1.06 1.33-.728.405-1.766.67-2.94.67s-2.212-.265-2.94-.67C6.318 8.918 6 8.427 6 8V6.823c.177.14.371.268.575.382C7.477 7.705 8.69 8 10 8s2.523-.294 3.425-.795c.204-.114.398-.241.575-.382V8Zm-1.06-4.33C13.682 4.082 14 4.573 14 5c0 .426-.317.917-1.06 1.33-.728.405-1.766.67-2.94.67s-2.212-.265-2.94-.67C6.318 5.918 6 5.427 6 5c0-.426.317-.917 1.06-1.33C7.789 3.264 8.827 3 10 3s2.212.265 2.94.67Z",
    clipRule: "evenodd",
    opacity: 0.5
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M10 2c-1.311 0-2.523.294-3.425.795C5.69 3.287 5 4.045 5 5c0 .954.69 1.713 1.575 2.205C7.477 7.705 8.69 8 10 8s2.523-.294 3.425-.795C14.31 6.713 15 5.955 15 5c0-.954-.69-1.713-1.575-2.205C12.523 2.295 11.31 2 10 2ZM6 5c0-.426.317-.917 1.06-1.33C7.789 3.264 8.827 3 10 3s2.212.265 2.94.67C13.682 4.082 14 4.573 14 5c0 .426-.317.917-1.06 1.33-.728.405-1.766.67-2.94.67s-2.212-.265-2.94-.67C6.318 5.918 6 5.427 6 5Z",
    clipRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10 13c-1.174 0-2.212-.265-2.94-.67C6.318 11.918 6 11.427 6 11H5c0 .954.69 1.713 1.575 2.205.902.5 2.114.795 3.425.795s2.523-.294 3.425-.795C14.31 12.713 15 11.955 15 11h-1c0 .426-.317.917-1.06 1.33-.728.405-1.766.67-2.94.67ZM0 4h3v1H0V4ZM3 11H0v1h3v-1Z"
  }));
}
const ForwardRef = React.forwardRef(CmsSandwichIcon);
module.exports = ForwardRef;