import { WeElement, define, h } from "omi";

class ComponentName extends WeElement {
  render(props) {
    return h(
      "div",
      null,
      "hello world",
      h("p", null, "123"),
      h("ul", null, h("li", null, this.name)),
      h("p", null, "123")
    );
  }
}

ComponentName.css = ``;
define("component-name", ComponentName);
