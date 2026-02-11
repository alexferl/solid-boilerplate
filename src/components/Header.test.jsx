import { render, screen } from "@solidjs/testing-library"
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest"
import { Header } from "./Header"

// Mock @solidjs/router
const mockUseLocation = vi.fn()

vi.mock("@solidjs/router", () => ({
  useLocation: () => mockUseLocation(),
}))

describe("Header", () => {
  beforeEach(() => {
    mockUseLocation.mockReturnValue({ pathname: "/" })
  })

  afterEach(() => {
    vi.clearAllMocks()
  })

  it("renders navigation links", () => {
    render(() => <Header />)

    expect(screen.getByRole("link", { name: "Home" })).toBeTruthy()
    expect(screen.getByRole("link", { name: "404" })).toBeTruthy()
  })

  it("marks current page as active", () => {
    const { container } = render(() => <Header />)
    const homeLink = container.querySelector('a[href="/"]')

    expect(homeLink).toBeTruthy()
    expect(homeLink?.className).toBe("active")
  })

  it("marks non-current page as inactive", () => {
    const { container } = render(() => <Header />)
    const notFoundLink = container.querySelector('a[href="/404"]')

    expect(notFoundLink).toBeTruthy()
    expect(notFoundLink?.className).not.toBe("active")
  })

  it("marks /404 as active when on that page", () => {
    mockUseLocation.mockReturnValue({ pathname: "/404" })

    const { container } = render(() => <Header />)
    const notFoundLink = container.querySelector('a[href="/404"]')

    expect(notFoundLink?.className).toBe("active")
  })
})
