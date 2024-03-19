const React = require("react");
function MergeCellMiddleVerticalIcon({
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
    d: "M8 4.293 5.854 2.146l-.708.708L8.5 6.207l3.354-3.353-.708-.708L9 4.293V0H8v4.293ZM2 8V7h13v1H2ZM8 10.707l-2.146 2.147-.708-.708L8.5 8.793l3.354 3.353-.708.708L9 10.707V15H8v-4.293Z"
  }));
}
const ForwardRef = React.forwardRef(MergeCellMiddleVerticalIcon);
module.exports = ForwardRef;