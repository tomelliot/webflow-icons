import * as React from "react";
function AddPanelIcon({
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
    d: "M11.875 10.875V3.5h1.25v7.375H20.5v1.25h-7.375V19.5h-1.25v-7.375H4.5v-1.25h7.375Z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = React.forwardRef(AddPanelIcon);
export default ForwardRef;