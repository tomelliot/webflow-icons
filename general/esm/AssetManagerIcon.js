import * as React from "react";
function AssetManagerIcon({
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
    d: "M9 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M5 6.5A1.5 1.5 0 0 1 6.5 5h12A1.5 1.5 0 0 1 20 6.5v12a1.5 1.5 0 0 1-1.5 1.5h-12A1.5 1.5 0 0 1 5 18.5v-12ZM6.5 6a.5.5 0 0 0-.5.5v11.793l6.5-6.5 6.5 6.5V6.5a.5.5 0 0 0-.5-.5h-12Zm6 7.207L18.293 19H6.707l5.793-5.793Z",
    clipRule: "evenodd"
  }), /*#__PURE__*/React.createElement("g", {
    opacity: 0.4
  }, /*#__PURE__*/React.createElement("path", {
    d: "M9.793 1.308a1 1 0 0 1 1.414 0L13.899 4H7.1l2.692-2.692ZM4 7.101V13.9l-2.692-2.692a1 1 0 0 1 0-1.414L4 7.1ZM12.5 19H8l3.646-3.646a.5.5 0 0 1 .854.353V19Z"
  })));
}
const ForwardRef = React.forwardRef(AssetManagerIcon);
export default ForwardRef;