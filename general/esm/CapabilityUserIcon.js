import * as React from "react";
function CapabilityUserIcon({
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
    fillRule: "evenodd",
    d: "M12.5 4a4.5 4.5 0 0 0-2.308 8.364A7.5 7.5 0 0 0 5 19.5a.5.5 0 0 0 .5.5h14a.5.5 0 0 0 .5-.5 7.5 7.5 0 0 0-5.192-7.136A4.5 4.5 0 0 0 12.5 4ZM9 8.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0Zm-1.096 6.404A6.5 6.5 0 0 1 18.98 19H6.019a6.5 6.5 0 0 1 1.885-4.096Z",
    clipRule: "evenodd"
  }), /*#__PURE__*/React.createElement("g", {
    opacity: 0.4
  }, /*#__PURE__*/React.createElement("path", {
    d: "M11.543 6.19a2.5 2.5 0 0 1 .46-.14c.271-.055.497.174.497.45V8a.5.5 0 0 1-.5.5h-1.5c-.276 0-.505-.226-.45-.497a2.508 2.508 0 0 1 .682-1.27c.232-.233.508-.417.811-.543ZM12.5 14.5a.466.466 0 0 0-.5-.477 5.503 5.503 0 0 0-4.581 3.372c-.123.297.109.605.43.605H12a.5.5 0 0 0 .5-.5v-3Z"
  })));
}
const ForwardRef = React.forwardRef(CapabilityUserIcon);
export default ForwardRef;