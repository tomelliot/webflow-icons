import * as React from "react";
function PreviewIcon({
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
    d: "M3.262 1.06a.5.5 0 0 1 .51.02l10 6.5a.5.5 0 0 1 0 .84l-10 6.5A.5.5 0 0 1 3 14.5v-13a.5.5 0 0 1 .262-.44ZM4 2.422V13.58L12.582 8 4 2.421Z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = React.forwardRef(PreviewIcon);
export default ForwardRef;