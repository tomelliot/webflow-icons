import * as React from "react";
function ComponentPropertiesIcon({
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
    d: "M8.479 1.692a1 1 0 0 0-.958 0l-5 2.727A1 1 0 0 0 2 5.297v5.406a1 1 0 0 0 .521.878l5 2.727a1 1 0 0 0 .958 0l5-2.727a1 1 0 0 0 .521-.878V5.297a1 1 0 0 0-.521-.878l-5-2.727ZM3.544 5 8 2.57 12.456 5 8 7.43 3.544 5ZM3 5.842v4.861l4.5 2.455V8.297L3 5.842Zm5.5 7.316 4.5-2.455v-4.86L8.5 8.296v4.86Z",
    clipRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M13.74 11.44A.5.5 0 0 0 14 11V5a.5.5 0 0 0-.74-.439l-5.5 3a.5.5 0 0 0-.26.44v6a.5.5 0 0 0 .74.438l5.5-3Z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = React.forwardRef(ComponentPropertiesIcon);
export default ForwardRef;