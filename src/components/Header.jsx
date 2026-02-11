import { useLocation } from "@solidjs/router"

export function Header() {
  const location = useLocation()

  return (
    <header>
      <nav>
        <a href="/" class={location.pathname === "/" ? "active" : ""}>
          Home
        </a>
        <a href="/404" class={location.pathname === "/404" ? "active" : ""}>
          404
        </a>
      </nav>
    </header>
  )
}
