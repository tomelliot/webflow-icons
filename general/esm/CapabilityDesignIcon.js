import * as React from "react";
function CapabilityDesignIcon({
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
    d: "m9.836 8.836 4.31 4.31a.5.5 0 0 1-.353.854H11.33a.5.5 0 0 1-.46-.303l-1.847-4.31c-.217-.507.424-.94.813-.551Z",
    opacity: 0.4
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M6 4.707C6 3.817 7.077 3.37 7.707 4L18 14.293c.63.63.184 1.707-.707 1.707h-5.586l-4 4c-.63.63-1.707.184-1.707-.707V4.707ZM17.293 15 7 4.707v14.586l4-4a1 1 0 0 1 .707-.293h5.586Z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = React.forwardRef(CapabilityDesignIcon);
export default ForwardRef;