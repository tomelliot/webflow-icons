import * as React from "react";
function UnlimitedIcon({
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
    d: "M2 7.78a2.78 2.78 0 0 1 5.093-1.542l.323.485-.832.554-.323-.484A1.78 1.78 0 0 0 3 7.78v.356A1.864 1.864 0 0 0 6.32 9.3L8.9 6.075A2.864 2.864 0 0 1 14 7.864v.356a2.78 2.78 0 0 1-5.093 1.542l-.323-.485.832-.554.323.484A1.78 1.78 0 0 0 13 8.22v-.356A1.864 1.864 0 0 0 9.68 6.7L7.1 9.925A2.864 2.864 0 0 1 2 8.136V7.78Z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = React.forwardRef(UnlimitedIcon);
export default ForwardRef;