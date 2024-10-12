export class RegistrationForm {
  constructor(parent) {
    this.parent = parent;
    this.parent.innerHtml = '';
    this.node = this.render();
    this.parent.appendChild(this.node);
  }

  render() {
    return template();
  }

  destroy() {
    this.node.remove();
  }
}