import * as React from "react";
function UnpublishIcon({
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
    d: "m14.354 2.354-13 13-.708-.707L2 13.293V10a.5.5 0 0 1 .146-.353L4.003 7.79a6.502 6.502 0 0 1 3.788-5.7.5.5 0 0 1 .418 0 6.527 6.527 0 0 1 2.696 2.298l2.742-2.742.707.708ZM10.18 5.112 3 12.292v-2.085l1.854-1.853A.5.5 0 0 0 5 8a5.5 5.5 0 0 1 3-4.9 5.525 5.525 0 0 1 2.181 2.012ZM8.001 12.9a5.52 5.52 0 0 1-1.433-1.054l-.707.707a6.512 6.512 0 0 0 1.93 1.357.5.5 0 0 0 .418 0c1-.459 1.863-1.164 2.512-2.037l2.462 2.014A.5.5 0 0 0 14 13.5V10a.5.5 0 0 0-.146-.353L11.997 7.79a6.509 6.509 0 0 0-.154-1.218l-.87.87c.018.184.027.37.027.558a.5.5 0 0 0 .146.354L13 10.207v2.238l-2.069-1.693a.5.5 0 0 0-.742.125A5.528 5.528 0 0 1 8 12.9Z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = React.forwardRef(UnpublishIcon);
export default ForwardRef;