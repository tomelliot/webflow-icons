import * as React from "react";
function CssPreviewIcon({
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
    d: "M6 3h-.5A1.5 1.5 0 0 0 4 4.5V6c0 .818-.393 1.544-1 2 .607.456 1 1.182 1 2v1.5A1.5 1.5 0 0 0 5.5 13H6v1h-.5A2.5 2.5 0 0 1 3 11.5V10a1.5 1.5 0 0 0-1.5-1.5H1v-1h.5A1.5 1.5 0 0 0 3 6V4.5A2.5 2.5 0 0 1 5.5 2H6v1ZM10 3h.5A1.5 1.5 0 0 1 12 4.5V6c0 .818.393 1.544 1 2-.607.456-1 1.182-1 2v1.5a1.5 1.5 0 0 1-1.5 1.5H10v1h.5a2.5 2.5 0 0 0 2.5-2.5V10a1.5 1.5 0 0 1 1.5-1.5h.5v-1h-.5A1.5 1.5 0 0 1 13 6V4.5A2.5 2.5 0 0 0 10.5 2H10v1Z"
  }));
}
const ForwardRef = React.forwardRef(CssPreviewIcon);
export default ForwardRef;