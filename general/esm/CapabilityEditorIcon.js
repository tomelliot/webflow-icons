import * as React from "react";
function CapabilityEditorIcon({
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
    d: "M6 15.207v1.586a.5.5 0 0 0 .854.353l9.292-9.292a.5.5 0 0 0 0-.708l-.792-.792a.5.5 0 0 0-.708 0l-8.5 8.5a.5.5 0 0 0-.146.353Z",
    opacity: 0.4
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M13.94 4.354a1.5 1.5 0 0 1 2.12 0l3.586 3.585a1.5 1.5 0 0 1 0 2.122L9.707 20H4v-5.708l9.94-9.94Zm1.414.707a.5.5 0 0 0-.708 0L5 14.707V19h4.293l9.646-9.646a.5.5 0 0 0 0-.707L15.354 5.06Z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = React.forwardRef(CapabilityEditorIcon);
export default ForwardRef;