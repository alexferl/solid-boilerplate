import solidLogo from "@/src/assets/solid.svg"
import "./style.css"

export function Home() {
  return (
    <div class="home">
      <a href="https://solidjs.com" target="_blank" rel="noreferrer">
        <img src={solidLogo} alt="Solid logo" height="160" width="160" />
      </a>
      <h1>Get Started building Vite-powered Solid Apps</h1>
      <section>
        <Resource
          title="Learn Solid"
          description="If you're new to Solid, try the interactive tutorial to learn important concepts"
          href="https://solidjs.com/tutorial"
        />
        <Resource
          title="Solid Docs"
          description="To learn more about Solid and its reactive primitives, take a look at the documentation"
          href="https://docs.solidjs.com"
        />
        <Resource
          title="Learn Vite"
          description="To learn more about Vite and how you can customize it to fit your needs, take a look at their excellent documentation"
          href="https://vitejs.dev"
        />
      </section>
    </div>
  )
}

function Resource(props) {
  return (
    <a href={props.href} target="_blank" class="resource" rel="noreferrer">
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </a>
  )
}
