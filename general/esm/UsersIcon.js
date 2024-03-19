import * as React from "react";
function UsersIcon({
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
    d: "M4.5 7a2.5 2.5 0 1 0-1.873-.844A2.501 2.501 0 0 0 1 8.5V9h1v-.5A1.5 1.5 0 0 1 3.5 7h1Zm0-4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM15 4.5a2.49 2.49 0 0 1-.627 1.656A2.5 2.5 0 0 1 16 8.5V9h-1v-.5A1.5 1.5 0 0 0 13.5 7h-1A2.5 2.5 0 1 1 15 4.5Zm-4 0a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM10.373 11.156a2.5 2.5 0 1 0-3.745 0A2.5 2.5 0 0 0 5 13.5v.5h1v-.5A1.5 1.5 0 0 1 7.5 12h2a1.5 1.5 0 0 1 1.5 1.5v.5h1v-.5a2.5 2.5 0 0 0-1.627-2.344ZM7 9.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = React.forwardRef(UsersIcon);
export default ForwardRef;