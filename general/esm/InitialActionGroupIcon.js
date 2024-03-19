import * as React from "react";
function InitialActionGroupIcon({
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
    d: "M12.2 3.1a.5.5 0 0 1 .8.4v9a.5.5 0 0 1-.8.4l-6-4.5a.5.5 0 0 1 0-.8l6-4.5ZM7.333 8 12 11.5v-7L7.333 8Z",
    clipRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m2.2 7.6 6-4.5.6.8L3.333 8 8.8 12.1l-.6.8-6-4.5a.5.5 0 0 1 0-.8Z"
  }));
}
const ForwardRef = React.forwardRef(InitialActionGroupIcon);
export default ForwardRef;