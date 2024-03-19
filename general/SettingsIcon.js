const React = require("react");
function SettingsIcon({
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
    d: "m3.304 4.134 2.646.316L7 2h2l1.05 2.45 2.646-.316 1 1.732L12.1 8l1.596 2.134-1 1.732-2.646-.316L9 14H7l-1.05-2.45-2.646.316-1-1.732L3.9 8 2.304 5.866l1-1.732Zm3.565.71L7.66 3h.681l.79 1.844a1 1 0 0 0 1.038.599l1.992-.238.34.59L11.3 7.401a1 1 0 0 0 0 1.198l1.201 1.606-.34.59-1.992-.238a1 1 0 0 0-1.037.6L8.34 13h-.682l-.79-1.844a1 1 0 0 0-1.037-.599l-1.992.238-.34-.59L4.7 8.6a1 1 0 0 0 0-1.198L3.5 5.795l.34-.59 1.992.238a1 1 0 0 0 1.037-.6ZM8 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = React.forwardRef(SettingsIcon);
module.exports = ForwardRef;