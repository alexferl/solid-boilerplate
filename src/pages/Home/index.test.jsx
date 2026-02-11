import { render, screen } from "@solidjs/testing-library"
import { describe, expect, it, vi } from "vitest"
import { Home } from "./index"

vi.mock("@/src/assets/solid.svg", () => ({
  default: "./solid.svg",
}))

describe("Home", () => {
  it("renders Solid logo", () => {
    render(() => <Home />)
    const logo = screen.getByAltText("Solid logo")
    expect(logo).toBeTruthy()
  })

  it("renders main heading", () => {
    render(() => <Home />)

    const headings = screen.getAllByRole("heading", {
      level: 1,
      name: /Get Started building Vite-powered Solid Apps/i,
    })
    expect(headings.length).toBeGreaterThan(0)
    expect(headings[0]).toBeTruthy()
  })

  it("renders resource links", () => {
    render(() => <Home />)

    const learnSolidLinks = screen.getAllByRole("link", { name: /Learn Solid/ })
    const docsLinks = screen.getAllByRole("link", { name: /Solid Docs/ })
    const learnViteLinks = screen.getAllByRole("link", { name: /Learn Vite/ })

    expect(learnSolidLinks.length).toBeGreaterThan(0)
    expect(docsLinks.length).toBeGreaterThan(0)
    expect(learnViteLinks.length).toBeGreaterThan(0)
  })

  it("resource links open in new tab", () => {
    render(() => <Home />)
    const links = screen.getAllByRole("link")

    links.forEach((link) => {
      expect(link.getAttribute("target")).toBe("_blank")
      expect(link.getAttribute("rel")).toBe("noreferrer")
    })
  })
})
