import { MainPage } from "../../pages"

const START_ROUTE = 0

export class App {
    constructor(root, routes) {
        this.root = root
        this.routes = routes // [key: 'pageName', value: { property }]
        this.path = this.routes.pages[START_ROUTE].path
        this.currentElement = this.routes[START_ROUTE].path
        // TODO: сделать Object.entries(routes). Настроить eslint
    }

    render() {
        console.log({ currentElement: this.currentElement })
        return new MainPage(this.root)
    }
}
