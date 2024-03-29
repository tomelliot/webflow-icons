const React = require("react");
function ToolbarSettingsIcon({
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
    d: "M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M11.347 4a1 1 0 0 0-.937.649L9.365 7.436 6.43 6.948a1 1 0 0 0-1.03.486l-.654 1.132a1 1 0 0 0 .094 1.135L6.73 12l-1.89 2.299a1 1 0 0 0-.095 1.135l.654 1.132a1 1 0 0 0 1.03.486l2.936-.488 1.045 2.787a1 1 0 0 0 .937.649h1.307a1 1 0 0 0 .936-.649l1.045-2.787 2.937.488a1 1 0 0 0 1.03-.486l.653-1.132a1 1 0 0 0-.094-1.135L17.271 12l1.89-2.299a1 1 0 0 0 .094-1.135l-.653-1.132a1 1 0 0 0-1.03-.486l-2.937.488-1.045-2.787A1 1 0 0 0 12.654 4h-1.307Zm0 1h1.307l1.045 2.787a1 1 0 0 0 1.1.635l2.937-.488.653 1.132-1.891 2.299a1 1 0 0 0 0 1.27l1.891 2.3-.653 1.13-2.937-.488a1 1 0 0 0-1.1.636L12.654 19h-1.307l-1.045-2.787a1 1 0 0 0-1.1-.636l-2.937.489-.654-1.132 1.892-2.299a1 1 0 0 0 0-1.27L5.61 9.066l.654-1.132 2.936.488a1 1 0 0 0 1.1-.635L11.348 5Z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = React.forwardRef(ToolbarSettingsIcon);
module.exports = ForwardRef;