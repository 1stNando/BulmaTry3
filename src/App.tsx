import React from 'react'

export function App() {
  return (
    <>
      <nav className="navbar has-shadow is-white">
        <div className="navbar-brand">
          <a className="navbar-item">
            <img
              src="src/assets/logo.png"
              alt="site logo"
              className="py-2 px-2"
              max-height="100px"
            />
          </a>
          <a className="navbar-burger" id="burger">
            <span></span>
            <span></span>
            <span></span>
          </a>
        </div>

        <div className="navbar-menu" id="nav-links">
          <div className="navbar-end">
            <a className="navbar-item">My Account</a>
            <a className="navbar-item">Shopping Cart ()</a>
          </div>
        </div>
      </nav>

      <div className="section pt-4 pb-0">
        <nav className="breadcrumb has-arrow-separator">
          <ul className="container">
            <li>
              <a className="has-text-grey">Coffee Ninja</a>
            </li>
            <li>
              <a>Shop</a>
            </li>
            <li className="is-active">
              <a className="has-text-grey">Docker Dark Roast</a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Product page below! */}
      <section className="section">
        <div className="container">
          <div className="columns is-vcentered">
            <div className="column is-3">
              <h1 className="is-size-1 title">Docker</h1>
              <h2 className="is-size-2 subtitle">Dark Roast</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Delectus possimus nam facilis esse laboriosam numquam eveniet
                laborum est, perferendis natus labore.
              </p>
            </div>
            <div className="column is-5 has-text-centered">
              <img src="src/assets/product.png" className="px-6"></img>
            </div>
            <div className="column is-4">
              <div className="is-size-4 mb-4">$15.99</div>
              <p className="mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
                ipsum dolor sit, amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
        </div>
      </section>
      <script src="index.tsx"></script>
    </>
  )
}
