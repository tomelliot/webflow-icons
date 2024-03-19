import * as React from "react";
function PagePanelIcon({
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
    d: "M6.5 4a.5.5 0 0 0-.5.5v15a.5.5 0 0 0 .5.5h12a.5.5 0 0 0 .5-.5V9.707L13.293 4H6.5ZM5 4.5A1.5 1.5 0 0 1 6.5 3h7.207L20 9.293V19.5a1.5 1.5 0 0 1-1.5 1.5h-12A1.5 1.5 0 0 1 5 19.5v-15Z",
    clipRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16.793 10H13.5a.5.5 0 0 1-.5-.5V6.207a.5.5 0 0 1 .854-.353l3.292 3.292a.5.5 0 0 1-.353.854Z",
    opacity: 0.4
  }));
}
const ForwardRef = React.forwardRef(PagePanelIcon);
export default ForwardRef;