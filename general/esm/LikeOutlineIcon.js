import * as React from "react";
function LikeOutlineIcon({
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
    d: "M2.879 3.879a3 3 0 0 1 4.242 0L8 4.757l.879-.878A3 3 0 1 1 13.12 8.12L8.354 12.89a.5.5 0 0 1-.708 0L2.88 8.121a3 3 0 0 1 0-4.242Zm3.535.707a2 2 0 1 0-2.828 2.828L8 11.828l4.414-4.414a2 2 0 1 0-2.828-2.828L8.354 5.818a.5.5 0 0 1-.708 0L6.414 4.586Z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = React.forwardRef(LikeOutlineIcon);
export default ForwardRef;