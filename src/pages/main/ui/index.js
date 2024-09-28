import template from './index.pug';

export class MainPage {
    constructor(parent) {
        this.parent = parent
        this.parent.innerHtml = ''
        this.node = this.render()
        // console.log({ node: this.node })
        this.parent.innerHtml = this.node
    }

    render() {
        return template()
    }

    destroy() {
        this.node.remove()
    }
}

