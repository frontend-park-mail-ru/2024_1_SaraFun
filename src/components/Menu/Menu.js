export class Menu {
    #parent
    #config
    constructor(parent, config) {
        this.#parent = parent;
        this.#config = config;

        this.state = {
            activeMenuLink: null,
            menuElements: {},
        }
    }

    get config() {
        return this.#config;
    }

    get items() {
        return Object.entries(this.config.menu);
    }

    render() {
        this.renderTemplate();
    }

    renderTemplate() {
        const items = this.items.map(([key, {href, text}], index) => {
            let className = 'menu-item';
            if (index === 0) {
                className += ' active';
            }
            return {key, href, text, className};
        });
        
        const pug = require('pug');
        const template = pug.compileFile('Menu.pug');
        const html = template({items});
        this.#parent.innerHTML = html;

        this.#parent.querySelectorAll('a').forEach((element) => {
            this.state.menuElements[element.dataset.section] = element;
        })
    }
}
