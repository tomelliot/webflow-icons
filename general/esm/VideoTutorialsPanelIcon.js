import * as React from "react";
function VideoTutorialsPanelIcon({
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
    d: "M4.5 11.595H5v-.213l-.154-.147-.346.36ZM9.99 9l-.498.038.035.462h.464V9Zm.02 0v.5h.463l.035-.462L10.01 9Zm5.49 2.595-.346-.36-.154.147v.213h.5Zm0 .178H15v.776l.707-.321-.207-.455Zm4.293-1.952.207.456-.207-.456Zm0 8.358-.207.455.207-.455ZM15.5 16.227l.207-.455-.707-.321v.776h.5ZM4.846 11.235A2.74 2.74 0 0 1 4 9.25H3a3.74 3.74 0 0 0 1.154 2.706l.692-.721ZM4 9.25A2.75 2.75 0 0 1 6.75 6.5v-1A3.75 3.75 0 0 0 3 9.25h1ZM6.75 6.5a2.75 2.75 0 0 1 2.742 2.538l.997-.076A3.75 3.75 0 0 0 6.75 5.5v1Zm3.24 3h.02v-1h-.02v1Zm.518-.462A2.75 2.75 0 0 1 13.25 6.5v-1a3.75 3.75 0 0 0-3.74 3.462l.998.076ZM13.25 6.5A2.75 2.75 0 0 1 16 9.25h1a3.75 3.75 0 0 0-3.75-3.75v1ZM16 9.25a2.74 2.74 0 0 1-.846 1.985l.692.721A3.74 3.74 0 0 0 17 9.25h-1Zm0 2.523v-.178h-1v.178h1Zm-.293.455L20 10.277l-.414-.91-4.293 1.95.414.91ZM20 10.277h1a1 1 0 0 0-1.414-.91l.414.91Zm0 0v7.447h1v-7.447h-1Zm0 7.447-.414.91a1 1 0 0 0 1.414-.91h-1Zm0 0-4.293-1.952-.414.91 4.293 1.952.414-.91ZM16 18v-1.773h-1V18h1Zm-1 1a1 1 0 0 0 1-1h-1v1ZM5 19h10v-1H5v1Zm-1-1a1 1 0 0 0 1 1v-1H4Zm0-6.405V18h1v-6.405H4Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6 12.5a.5.5 0 0 1 .5-.5h3.793a.5.5 0 0 1 .353.854l-3.792 3.792A.5.5 0 0 1 6 16.293V12.5Z",
    opacity: 0.4
  }));
}
const ForwardRef = React.forwardRef(VideoTutorialsPanelIcon);
export default ForwardRef;