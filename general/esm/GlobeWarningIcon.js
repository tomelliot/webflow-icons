import * as React from "react";
function GlobeWarningIcon({
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
    d: "M8.5 14v-1c-.057 0-.191-.034-.386-.281-.19-.241-.383-.62-.554-1.134-.305-.916-.513-2.17-.553-3.585H8.5V7H7.007c.04-1.415.248-2.669.553-3.585.171-.513.364-.893.554-1.134C8.308 2.035 8.443 2 8.5 2c.057 0 .191.034.386.281.19.241.383.62.554 1.134.305.916.513 2.17.553 3.585h1c-.04-1.5-.26-2.865-.604-3.9a6.129 6.129 0 0 0-.368-.887A5.505 5.505 0 0 1 13.978 7h1.003A6.5 6.5 0 1 0 8.5 14ZM6.611 3.1c-.345 1.035-.564 2.4-.604 3.9H3.022A5.504 5.504 0 0 1 6.98 2.213c-.138.265-.26.564-.368.886ZM6.007 8H3.022a5.505 5.505 0 0 0 3.957 4.787 6.13 6.13 0 0 1-.368-.886C6.266 10.866 6.047 9.5 6.007 8Z",
    clipRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M12 8v3h1V8h-1Zm.5 6.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = React.forwardRef(GlobeWarningIcon);
export default ForwardRef;