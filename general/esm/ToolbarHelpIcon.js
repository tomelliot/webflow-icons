import * as React from "react";
function ToolbarHelpIcon({
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
    d: "M12.5 3a8.5 8.5 0 1 0 8.5 8.5h-1A7.5 7.5 0 1 1 12.5 4V3Z",
    opacity: 0.4
  }), /*#__PURE__*/React.createElement("path", {
    d: "M15 3h-1v1h1v1h1V4h1V3h-1V2h-1v1ZM19 7h-2v1h2v2h1V8h2V7h-2V5h-1v2ZM10 9.5a2.5 2.5 0 0 1 5 0v.172a2.5 2.5 0 0 1-.732 1.767l-.829.829a1.5 1.5 0 0 0-.439 1.06v.172h-1v-.172a2.5 2.5 0 0 1 .732-1.767l.829-.829A1.5 1.5 0 0 0 14 9.672V9.5a1.5 1.5 0 0 0-3 0v.5h-1v-.5ZM13.25 15.5a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
  }));
}
const ForwardRef = React.forwardRef(ToolbarHelpIcon);
export default ForwardRef;