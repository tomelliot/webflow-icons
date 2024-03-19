const React = require("react");
function WebflowIconIcon({
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
    d: "M11.898 5.921s-1.19 3.67-1.283 3.98C10.615 9.591 9.71 3 9.71 3 7.678 3 6.619 4.414 6.016 5.921c0 0-1.453 3.679-1.546 3.988 0-.286-.224-3.95-.224-3.95A3.292 3.292 0 0 0 1 3l1.67 9.992c2.133 0 3.269-1.422 3.864-2.921 0 0 1.275-3.246 1.33-3.393 0 .14.92 6.322.92 6.322a4.089 4.089 0 0 0 3.902-2.774l3-7.226c-2.111 0-3.216 1.414-3.788 2.921Z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = React.forwardRef(WebflowIconIcon);
module.exports = ForwardRef;