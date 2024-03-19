import * as React from "react";
function LogicIcon({
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
    d: "M12 9V3h1v6h4.5a1.5 1.5 0 0 1 1.5 1.5V14h-1v-3.5a.5.5 0 0 0-.5-.5h-10a.5.5 0 0 0-.5.5V14H6v-3.5A1.5 1.5 0 0 1 7.5 9H12ZM16.354 20.354l2.146-2.147 2.146 2.147.708-.708-2.147-2.146 2.147-2.146-.708-.708-2.146 2.147-2.146-2.147-.708.708 2.147 2.146-2.147 2.146.708.708Z"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M6.5 20a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM8 17.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = React.forwardRef(LogicIcon);
export default ForwardRef;