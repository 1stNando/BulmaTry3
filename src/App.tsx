import React from 'react'

export function App() {
  return (
    <>
      <nav>
        <button className="button">Button</button>
        <button className="button is-primary">Button</button>
        <button className="button is-large">Button</button>
        <button className="button is-light">Light</button>
        <button className="button is-dark">Dark</button>
        <button className="button is-black">Black</button>
      </nav>

      <h1 className="title">Bulma</h1>
      <div className="buttons">
        <a className="button is-primary">Primary</a>
        <a className="button is-link">Link</a>
      </div>

      <div>Hello, World!!! </div>
      <h1 className="is-size-1 has-text-danger">first heading</h1>
      <h2 className="is-size-2 has-text-primary">second heading</h2>
      <h3 className="is-size-3 has-text-success">third heading</h3>
      <h4 className="is-size-4 has-text-info">fouth heading</h4>
      <h5 className="is-size-5 has-text-dark">fifth heading</h5>
      <h6 className="is-size-6 has-text-warning">sixth heading</h6>

      <br></br>

      <p className="has-text-primary has-background-light">I'm primary text</p>
      <p className="has-text-warning has-background-danger">I'm warning text</p>
      <p className="has-text-danger-light">I'm danger text</p>
      <p className="has-text-info">I'm info text</p>
      <p className="has-text-success">I'm success text</p>
      <p className="has-text-dark">I'm dark text</p>
      <p className="has-text-light has-background-primary-dark">
        I'm light text
      </p>
    </>
  )
}
