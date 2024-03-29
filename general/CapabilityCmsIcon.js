const React = require("react");
function CapabilityCmsIcon({
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
    d: "M12 10c3.314 0 6-1.343 6-3s-2.686-3-6-3-6 1.343-6 3 2.686 3 6 3Z",
    opacity: 0.4
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M12 2c-2.137 0-4.096.46-5.539 1.23C5.04 3.99 4 5.12 4 6.5v11c0 1.38 1.04 2.512 2.461 3.27C7.904 21.54 9.863 22 12 22c2.136 0 4.096-.46 5.539-1.23C18.96 20.012 20 18.88 20 17.5v-11c0-1.38-1.04-2.511-2.461-3.27C16.096 2.46 14.136 2 12 2Zm7 9.5v-5c0-.83-.64-1.698-1.932-2.387C15.797 3.435 14.006 3 12 3s-3.797.435-5.068 1.113C5.639 4.803 5 5.67 5 6.5v5c0 .83.64 1.698 1.932 2.387C8.203 14.565 9.994 15 12 15s3.797-.435 5.068-1.113C18.361 13.197 19 12.33 19 11.5ZM5 13.708c.401.407.902.763 1.461 1.062C7.904 15.54 9.863 16 12 16c2.136 0 4.096-.46 5.539-1.23A6.049 6.049 0 0 0 19 13.708V17.5c0 .83-.64 1.698-1.932 2.387C15.797 20.565 14.006 21 12 21s-3.797-.435-5.068-1.113C5.639 19.197 5 18.33 5 17.5v-3.792Z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = React.forwardRef(CapabilityCmsIcon);
module.exports = ForwardRef;