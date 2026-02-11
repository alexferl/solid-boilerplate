import { Route, Router } from "@solidjs/router"
import { render } from "solid-js/web"

import { Header } from "./components/Header.jsx"
import { NotFound } from "./pages/_404.jsx"
import { Home } from "./pages/Home/index.jsx"
import "./style.css"

function Layout(props) {
  return (
    <>
      <Header />
      <main>{props.children}</main>
    </>
  )
}

export function App() {
  return (
    <Router root={Layout}>
      <Route path="/" component={Home} />
      <Route path="*404" component={NotFound} />
    </Router>
  )
}

render(() => <App />, document.getElementById("app"))