const React = require("react");
function PublishIcon({
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
    d: "M8 7.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M8.209 2.09a.5.5 0 0 0-.418 0 6.502 6.502 0 0 0-3.788 5.7L2.146 9.646A.5.5 0 0 0 2 10v3.5a.5.5 0 0 0 .817.387l2.462-2.015A6.524 6.524 0 0 0 7.79 13.91a.5.5 0 0 0 .418 0c1-.459 1.863-1.164 2.512-2.038l2.462 2.015A.5.5 0 0 0 14 13.5V10a.5.5 0 0 0-.146-.354L11.997 7.79a6.502 6.502 0 0 0-3.788-5.7ZM5 8a5.5 5.5 0 0 1 3-4.9A5.5 5.5 0 0 1 11 8a.5.5 0 0 0 .146.354L13 10.207v2.238l-2.069-1.693a.5.5 0 0 0-.742.125A5.528 5.528 0 0 1 8 12.9a5.528 5.528 0 0 1-2.188-2.023.5.5 0 0 0-.743-.125L3 12.445v-2.238l1.854-1.853A.5.5 0 0 0 5 8Z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = React.forwardRef(PublishIcon);
module.exports = ForwardRef;