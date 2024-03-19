const React = require("react");
function AttachmentIcon({
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
    d: "m11.853 2.146.172.172a4.5 4.5 0 0 1 0 6.364l-3.172 3.172a3.328 3.328 0 0 1-4.707-4.708l3-3a1.914 1.914 0 0 1 2.707 2.708l-3 3-.707-.708 3-3a.914.914 0 0 0-1.293-1.292l-3 3a2.328 2.328 0 0 0 3.293 3.292l3.172-3.171a3.5 3.5 0 0 0 0-4.95l-.172-.171.707-.708Z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = React.forwardRef(AttachmentIcon);
module.exports = ForwardRef;