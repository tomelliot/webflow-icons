const React = require("react");
function SortAzDownIcon({
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
    d: "M8.505 8h1.062l.714-2h2.438l.714 2h1.062l-2.143-6h-1.704L8.505 8Zm3.857-3-.714-2h-.296l-.714 2h1.724Z",
    clipRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12.293 10H9V9h5v.707L10.707 13H14v1H9v-.707L12.293 10ZM5 10.311l1.645-1.663.71.704-2.824 2.855-2.883-2.852.704-.71L4 10.275V5h1v5.311Z"
  }));
}
const ForwardRef = React.forwardRef(SortAzDownIcon);
module.exports = ForwardRef;