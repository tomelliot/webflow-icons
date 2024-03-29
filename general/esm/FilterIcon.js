import * as React from "react";
function FilterIcon({
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
    d: "M2 3.707C1.37 3.077 1.816 2 2.707 2h10.586c.89 0 1.337 1.077.707 1.707l-4 4v5.586c0 .89-1.077 1.337-1.707.707l-2-2A1 1 0 0 1 6 11.293V7.707l-4-4ZM13.293 3H2.707l4 4A1 1 0 0 1 7 7.707v3.586l2 2V7.707A1 1 0 0 1 9.293 7l4-4Z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = React.forwardRef(FilterIcon);
export default ForwardRef;