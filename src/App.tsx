import React from 'react'

export function App() {
  const burgerIcon = document.querySelector('#burger')
  const navbarMenu = document.querySelector('#nav-links')

  burgerIcon?.addEventListener('click', () => {
    navbarMenu?.classList.toggle('is-active')
  })

  // tabs
  const tabs = document.querySelectorAll('.tabs li')
  const tabContentBoxex = document.querySelectorAll('#tab-content > div')

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      tabs.forEach((item) => item.classList.remove('is-active'))
      tab.classList.add('is-active')

      const target = tab.dataset.target
      tabContentBoxex.forEach((box) => {
        if (box.getAttribute('id') === target) {
          box.classList.remove('is-hidden')
        } else {
          box.classList.add('is-hidden')
        }
        // wont work unless this console.log is on for some reason...
        console.log(target)
      })
    })
  })

  // modal
  const signupButton = document.querySelector('#signup')
  const modalBg = document.querySelector('.modal-background')
  const modal = document.querySelector('.modal')

  signupButton?.addEventListener('click', () => {
    modal?.classList.add('is-active')
  })
  modalBg?.addEventListener('click', () => {
    modal?.classList.remove('is-active')
  })

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
            <a className="navbar-item">Shopping Cart (0)</a>
          </div>
        </div>
      </nav>

      {/* breadcrumbs */}
      <div className="section pt-4 pb-0">
        <nav className="breadcrumb has-arrow-separator">
          <ul className="container">
            <li>
              <a className="has-text-grey">Coffee Ninja</a>
            </li>
            <li>
              <a className="has-text-grey">Shop</a>
            </li>
            <li>
              <a className="is-active">Docker Dark Roast</a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Product page below! */}
      <section className="section">
        <div className="container">
          <div className="columns is-vcentered is-multiline">
            <div className="column is-6-tablet is-3-desktop">
              <h1 className="is-size-3-mobile is-size-1-desktop title">
                Docker
              </h1>
              <h2 className="is-size-3-mobile is-size-2-desktop subtitle">
                Dark Roast
              </h2>
              <p>
                Two ipsum dolores sit amet consectetur adipisicing elit.
                Delectus possimus nam facilis esse laboriosam numquam eveniet
                laborum est, perferendis natus labore.
              </p>
            </div>
            <div className="column is-6-tablet is-5-desktop has-text-centered">
              <img src="src/assets/product.png" className="px-6"></img>
            </div>
            <div className="column is-12-tablet is-4-desktop">
              <div className="is-size-4 mb-4">$10.95</div>
              <p className="mb-4">
                First orlast paragraph? ipsum dolor sit amet consectetur
                adipisicing elit.
              </p>
              <form>
                <div className="field">
                  <div className="control mb-6">
                    <div className="select is-dark">
                      <select>
                        <option>Small (250g)</option>
                        <option>Large (500g)</option>
                      </select>
                    </div>
                  </div>
                </div>
              </form>
              <button className="button is-primary is-rounded">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="columns is-8 is-variable">
            <div className="column is-7-tablet">
              {/* tabbed content */}
              <div className="tabs is-boxed">
                <ul>
                  <li className="is-active" data-target="product-details">
                    <a>Product Details</a>
                  </li>
                  <li data-target="delivery-information">
                    <a>Delivery Information</a>
                  </li>
                </ul>
              </div>
              <div className="px-2" id="tab-content">
                <div id="product-details">
                  <h3 className="is-size-5 title">Product Details</h3>
                  <p>
                    Five ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptas ex sunt dolores officiis, sequi iure laudantium!
                    Laudantium, tempora recusandae, asperiores amet voluptate
                    accusamus eaque saepe, dolores magnam illo incidunt
                    adipisci!
                  </p>
                </div>
                <div id="delivery-information" className="is-hidden">
                  <h3 className="is-size-5 title">Delivery Information</h3>
                  <p>
                    Six ipsum dolor sit amet consectetur adipisicing elit.
                    Facilis, corporis perspiciatis? Ducimus, nobis repellat?
                    Magni, qui quasi et labore architecto dolorem impedit est
                    perferendis deleniti debitis, nobis, soluta itaque
                    inventore!
                  </p>
                </div>
              </div>
            </div>
            <div className="colum is-5-tablet">
              <div className="message is-dark">
                <div className="message-header">
                  <p>Earn Points witht the Coffee Club</p>
                </div>
                <div className="message-body">
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Pariatur sint labore rem neque. Voluptas architecto sapiente
                    facilis suscipit quisquam ex. Quis corporis assumenda ipsum
                    eveniet maiores dolore, sed iusto voluptatum.
                  </p>
                  <div className="has-text-centered">
                    <button className="button mt-5" id="signup">
                      Sign Up
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* cards */}

      <section className="section is-hidden-mobile">
        <div className="container">
          <h3 className="title has-text-centered is-size-4">
            Related Products
          </h3>
          <div className="columns mt-5 is-8 is-variable is-centered">
            <div className="column is-4-tablet is-3-desktop">
              <div className="card">
                <div className="card-image has-text-centered px-6">
                  <img src="src/assets/p1.png" alt="product" />
                </div>
                <div className="card-content">
                  <p>$12.95</p>
                  <p className="title is-size-5">Cortado Cup</p>
                </div>
                <footer className="card-footer">
                  <p className="card-footer-item">
                    <a href="" className="has-text-grey">
                      View
                    </a>
                  </p>
                </footer>
              </div>
            </div>
            <div className="column is-4-tablet is-3-desktop">
              <div className="card">
                <div className="card-image has-text-centered px-6">
                  <img src="src/assets/p2.png" alt="product" />
                </div>
                <div className="card-content">
                  <p>$12.95</p>
                  <p className="title is-size-5">Docker Light</p>
                </div>
                <footer className="card-footer">
                  <p className="card-footer-item">
                    <a href="" className="has-text-grey">
                      View
                    </a>
                  </p>
                </footer>
              </div>
            </div>
            <div className="column is-4-tablet is-3-desktop">
              <div className="card">
                <div className="card-image has-text-centered px-6">
                  <img src="src/assets/p3.png" alt="product" />
                </div>
                <div className="card-content">
                  <p>$12.95</p>
                  <p className="title is-size-5">Coffee Crush</p>
                </div>
                <footer className="card-footer">
                  <p className="card-footer-item">
                    <a href="" className="has-text-grey">
                      View
                    </a>
                  </p>
                </footer>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* modal */}
      <div className="modal">
        <div className="modal-background">
          <div className="modal-content has-background-white py-5 px-5">
            <h3 className="title mb-6">Join the Club</h3>
            <form>
              <div className="field">
                <label className="label">Name</label>
                <div className="control">
                  <input type="text" className="input" placeholder="Name" />
                </div>
              </div>
              <div className="field">
                <label className="label">Email</label>
                <div className="control">
                  <input type="text" className="input" placeholder="Name" />
                </div>
              </div>
              <div className="field">
                {/* <div className="control">
                  <label className="checkbox">
                    <input type="checkbox">Remember me</input>
                  </label>
                </div> */}
              </div>
              <div className="mt-6 has-text-centered">
                <button className="button is-warning">Sign Up</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
