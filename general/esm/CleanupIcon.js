import * as React from "react";
function CleanupIcon({
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
    d: "M14.854 2.854 10.707 7l1.036 1.036a2 2 0 0 1 0 2.828l-1.414 1.414a3 3 0 0 1-4.243 0L3.149 9.341a2.412 2.412 0 0 1-.013-.013l-2-2 .707-.707a2 2 0 0 0 2.829 0l1.414-1.414a2 2 0 0 1 2.828 0L10 6.293l4.147-4.147.707.708Zm-9.43 7.348a2.989 2.989 0 0 0 1.955-.874l-.707-.707a2 2 0 0 1-2.819.01l-.429-.428a2.989 2.989 0 0 0 1.955-.875l1.414-1.414a1 1 0 0 1 1.414 0l2.829 2.829a1 1 0 0 1 0 1.414L9.622 11.57a2 2 0 0 1-2.829 0l-1.369-1.368Z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = React.forwardRef(CleanupIcon);
export default ForwardRef;