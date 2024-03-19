import * as React from "react";
function TransferAccountIcon({
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
    d: "M9.5 2a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5ZM8 4.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z",
    clipRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 8v2.973h4.283L5.648 9.355l.704-.71 2.855 2.824-2.852 2.883-.71-.704 1.657-1.675H2.5a.5.5 0 0 1-.5-.5V8h1ZM11.5 9H9V8h2.5a2.5 2.5 0 0 1 2.5 2.5V12h-1v-1.5A1.5 1.5 0 0 0 11.5 9Z"
  }));
}
const ForwardRef = React.forwardRef(TransferAccountIcon);
export default ForwardRef;