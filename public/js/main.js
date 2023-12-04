"use strict";

renderDOM();

function renderDOM() {
  var content = React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      null,
      "ToDoo List"
    )
  );
  ReactDOM.render(content, document.getElementById("app"));
}
renderDOM();
