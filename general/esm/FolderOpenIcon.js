import * as React from "react";
function FolderOpenIcon({
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
    d: "M2 3a1 1 0 0 0-1 1v3h1V4h3.293l2 2H12V5H7.707l-2-2H2Z"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M3.839 7a1 1 0 0 0-.929.629l-1.6 4A1 1 0 0 0 2.239 13h9.923a1 1 0 0 0 .928-.629l1.6-4A1 1 0 0 0 13.762 7H3.838Zm0 1h9.922l-1.6 4H2.24l1.6-4Z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = React.forwardRef(FolderOpenIcon);
export default ForwardRef;