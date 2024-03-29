const React = require("react");
function LocalizationIcon({
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
    d: "M13.98 7.5a6 6 0 0 0-11.96 0H2v1h.02a6 6 0 0 0 11.96 0H14v-1h-.02Zm-4.753 4.295C8.737 12.775 8.246 13 8 13c-.246 0-.737-.225-1.227-1.205-.41-.818-.702-1.97-.762-3.295H9.99c-.06 1.326-.353 2.477-.762 3.295ZM9.989 7.5H6.01c.06-1.326.353-2.477.762-3.295C7.263 3.225 7.754 3 8 3c.246 0 .737.225 1.227 1.205.41.818.702 1.97.762 3.295Zm1 1c-.068 1.655-.472 3.12-1.075 4.12a5.004 5.004 0 0 0 3.061-4.12H10.99Zm1.986-1H10.99c-.069-1.655-.473-3.12-1.076-4.12a5.004 5.004 0 0 1 3.061 4.12Zm-9.95 1a5.004 5.004 0 0 0 3.061 4.12c-.603-1-1.007-2.465-1.076-4.12H3.025Zm1.985-1c.069-1.655.473-3.12 1.076-4.12A5.004 5.004 0 0 0 3.025 7.5H5.01Z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = React.forwardRef(LocalizationIcon);
module.exports = ForwardRef;