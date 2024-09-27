// import { App, createRouter } from "./app"
import { MainPage } from "./pages"

const root = document.getElementById('root')

console.log({ root })

// const router = createRouter(root)

// const app = new App(root, Object.entries(router))

root.innerHTML = new MainPage(root)
