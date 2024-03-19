import * as React from "react";
function ActivityLogIcon({
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
    d: "M8.813 4.8a.5.5 0 0 1 .449.347l3.37 10.483 2.104-6.876a.5.5 0 0 1 .938-.05l2.162 5.044.795-1.484a.5.5 0 0 1 .44-.264H21v1h-1.63l-1.143 2.136a.5.5 0 0 1-.9-.039l-2.034-4.745-2.172 7.094a.5.5 0 0 1-.954.007L8.71 6.697l-2.682 6.007a.5.5 0 0 1-.457.296H3v-1h2.247L8.33 5.096a.5.5 0 0 1 .484-.295Z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = React.forwardRef(ActivityLogIcon);
export default ForwardRef;