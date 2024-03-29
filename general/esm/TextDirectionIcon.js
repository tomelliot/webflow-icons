import * as React from "react";
function TextDirectionIcon({
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
    d: "M4.438 7H3.043V1.312h1.434c.325 0 .62.053.882.157.263.104.489.258.676.46.19.201.336.45.438.747.101.297.152.638.152 1.023v.918c0 .386-.05.727-.152 1.024a2.057 2.057 0 0 1-.438.746c-.19.2-.419.353-.687.457a2.498 2.498 0 0 1-.91.156Zm0-.793h-.446V2.109h.485c.216 0 .4.032.554.094.154.06.278.154.371.281.097.125.167.288.211.489.047.198.07.437.07.718v.926c0 .365-.04.664-.12.899a.962.962 0 0 1-.395.523c-.182.112-.426.168-.73.168Z",
    clipRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8.578 1.313V7H7.63V1.312h.95Z"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M9.68 1.313h1.719c.375 0 .692.065.953.195.26.13.458.323.593.578.138.253.207.566.207.941 0 .284-.042.534-.128.75a1.45 1.45 0 0 1-.73.798l1.05 2.374V7h-1.016l-.925-2.184h-.774V7h-.95V1.312Zm1.695 2.707h-.746V2.11h.77c.192 0 .347.04.464.12.118.079.204.19.258.336.055.144.082.313.082.508 0 .183-.031.345-.093.489a.728.728 0 0 1-.274.335.82.82 0 0 1-.46.122Z",
    clipRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M11.149 12.144 12.309 11H7v-1h5.277l-1.133-1.149.712-.702 2.351 2.383-2.356 2.324-.702-.712ZM3.691 14l1.16 1.144-.702.712-2.356-2.324 2.351-2.383.712.702L3.723 13H9v1H3.691Z"
  }));
}
const ForwardRef = React.forwardRef(TextDirectionIcon);
export default ForwardRef;