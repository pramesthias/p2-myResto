// import { useState } from 'react'
// import './App.css'

import { useState } from "react"

function App() {
  const [card, setCard] = useState(0)

  return (
    <div id="app">
      {/* <!-- NAVBAR --> */}
      <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">Restaurant App</a>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <button id="register-button" type="button" className="nav-link">
                    Register
                  </button>
                </li>
                <li className="nav-item">
                  <button id="logIn-button" type="button" className="nav-link">
                    Log In
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <header className="bg-dark py-3">
          <div className="text-center text-white">
            <h1 className="display-5 fw-bolder">My Restaurant</h1>
          </div>
        </header>
      </div>


      {/* <!-- PUBLIC SITE ALL ITEM --> */}
      <div id="home-page" className="container mt-4">
        <div className="row">
          <div id="sidebar" className="col-md-3 sidebar">

            {/* <!-- SEARCH --> */}
            <div className="mb-3">
              <h5>Search</h5>
              <div className="input-group">
                <input id="search-name" name="search" type="text" className="form-control" placeholder="Search by Name" />
                <button className="btn btn-primary" type="submit">Search</button>
              </div>
            </div>

            {/* <!-- CHANGED --> */}
            <div className="card-body mt-4">
              <h5>Sort by Date</h5>
              <select name="sort" className="form-select">
                <option value="-createdAt">Date Ascending</option>
                <option value="createdAt">Date Descending</option>
              </select>
            </div>

            {/* <!-- FILTER --> */}
            <div className="card-body mt-4">
              <h5>Filter by Category</h5>
              <select name="filter" className="form-select">
                <option value="1">Indonesian Food</option>
                <option value="2">Chinese Food</option>
                <option value="3">Japanese Food</option>
              </select>
            </div>
          </div>


          {/* <!-- CUISINES MENU --> */}
          {/* <div className="col-md-9 mt-4">
            <div id="cuisines-card" className="row row-cols-2 row-cols-md-5 g-4">

              {card.map((c) => (
                <div key={c.id} className="col">
                  <div className="card text-center">
                    <img className="card-img-top"
                      src={c.imageUrl}
                      alt={c.name} />
                    <div className="card-body">
                      <h5 className="card-title text-center">{c.name}
                      </h5>
                      <button id="read-more-button" type="button" className="btn btn-outline-dark flex-shrink-0">
                        Read More
                      </button>
                    </div>
                  </div>
                </div>)
              )}


            </div>
          </div> */}
        </div>

        {/* <!-- PAGINATION --> */}
        <nav aria-label="Page navigation">
          <ul className="pagination mt-5 justify-content-center">
            <li className="page-item">
              <a className="page-link" href="#" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
              </a>
            </li>
            <li className="page-item active"><a className="page-link" href="#">1</a></li>
            <li className="page-item"><a className="page-link" href="#">2</a></li>
            <li className="page-item">
              <a className="page-link" href="#" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
              </a>
            </li>
          </ul>
        </nav>

      </div>


      {/* <!-- PUBLIC SITE DETAIL PAGE --> */}
      {/* <section id="detail-page" className="py-5">
          <div className="container px-4 px-lg-5 my-5">
            <div className="row gx-4 gx-lg-5 align-items-center">
              <div className="col-md-6"><img className="card-img-top mb-5 mb-md-0"
                src="https://asset.kompas.com/crops/x6OULHa8pMi47UnvDTzf1j62ov4=/3x0:700x465/750x500/data/photo/2022/08/25/6306b48bb80a1.jpeg"
                alt="Bakso" /></div>
              <div className="col-md-6">
                <h1 className="display-5 fw-bolder">BAKSO BULAT</h1>
                <div className="fs-5 mb-5">
                  <span>price 18.000</span>
                </div>
                <p className="lead">DESCRIPTION DESCRIPTION DESCRIPTION DESCRIPTION DESCRIPTION</p>
              </div>
            </div>
          </div>
        </section> */}


      {/* <!-- LOGIN PAGE --> */}
      <section id="login-page" className="vh-100 gradient-custom">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div className="card bg-dark text-white" style="border-radius: 1rem;">
                <div className="card-body p-5 text-center">
                  <h2 className="fw-bold mb-2 text-uppercase">Login</h2><br />

                  <div className="form-outline form-white mb-4">
                    <label className="form-label" htmlFor="typeEmailX">Email</label>
                    <input type="email" id="typeEmailX" className="form-control form-control-lg" />
                  </div>

                  <div className="form-outline form-white mb-4">
                    <label className="form-label" htmlFor="typePasswordX">Password</label>
                    <input type="password" id="typePasswordX" className="form-control form-control-lg" />
                  </div>

                  <button className="btn btn-outline-light btn-lg px-5" type="submit">Login</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* <!-- REGISTER PAGE --> */}
      {/* <section id="register-page" className="vh-100 gradient-custom">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div className="card bg-dark text-white" style="border-radius: 1rem;">
                <div className="card-body p-5 text-center">
                  <h2 className="fw-bold mb-2 text-uppercase">Register</h2><br />
                  <form>
                    <div className="form-outline form-white mb-4">
                      <label className="form-label" htmlFor="registerUsername">Username</label>
                      <input type="text" id="registerUsername" className="form-control" />
                    </div>

                    <div className="form-outline form-white mb-4">
                      <label className="form-label" htmlFor="registerPassword">Password</label>
                      <input type="password" id="registerPassword" className="form-control" />
                    </div>

                    <div className="form-outline form-white mb-4">
                      <label className="form-label" htmlFor="registerEmail">Email</label>
                      <input type="email" id="registerEmail" className="form-control" />
                    </div>

                    <div className="form-outline form-white mb-4">
                      <label className="form-label" htmlFor="registerPhoneNumber">PhoneNumber</label>
                      <input type="text" id="registerPhoneNumber" className="form-control" />
                    </div>

                    <div className="form-outline form-white mb-4">
                      <label className="form-label" htmlFor="registerAddress">Address</label>
                      <input type="text" id="registerAddress" className="form-control" />
                    </div>
                    <br />
                    <button className="btn btn-outline-light btn-lg px-5" type="submit">Sign Up</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section> */}


      {/* <!-- CUISINES TABLE --> */}
      {/* <div id="cuisines-table">
          <h2 className="text-center mt-4">The Cuisines</h2><br />
          <table className="table table-striped text-center">
            <thead>
              <tr>
                <th className="text-center">Image</th>
                <th className="text-center">Name</th>
                <th className="text-center">Description</th>
                <th className="text-center">Price</th>
                <th className="text-center">Category</th>
                <th className="text-center">Author</th>
                <th className="text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="pt-3-half" style="width: 20%; height: 20%;"><img className="card-img-top"
                  src="https://asset.kompas.com/crops/x6OULHa8pMi47UnvDTzf1j62ov4=/3x0:700x465/750x500/data/photo/2022/08/25/6306b48bb80a1.jpeg"/>
                </td>
                <td className="pt-3-half">Bakso</td>
                <td className="pt-3-half">Bulat seperti bola ping-pong</td>
                <td className="pt-3-half">18.000</td>
                <td className="pt-3-half">1</td>
                <td className="pt-3-half">1</td>
                <td>

                  <ul style="list-style-type: none;">
                    <li className="m-3">
                      <span className="table-edit"><button id="edit-cuisine-button" type="button"
                        className="btn btn-outline-dark flex-shrink-0">
                        Edit
                      </button></span><br />
                    </li>
                    <li className="m-3">
                      <span className="table-edit"><button id="edit-image-button" type="button"
                        className="btn btn-outline-dark flex-shrink-0">
                        Edit Image
                      </button></span><br />
                    </li>
                    <li className="m-3">
                      <span className="table-remove"><button id="remove-button" type="button"
                        className="btn btn-danger flex-shrink-0">
                        Remove
                      </button></span>
                    </li>
                  </ul>

                </td>
              </tr>
            </tbody>
          </table>

          <span><button id="add-cuisine-button" type="button" style="float: right;"
            className="btn btn-outline-dark flex-shrink-0 me-4">
            Add Cuisine
          </button></span>

        </div> */}


      {/* <!-- ADD NEW CUISINE PAGE --> */}
      {/* <section id="add-cuisine">
          <div className="container mt-5">
            <h2 className="mb-4 text-center">Add New Cuisine</h2>
            <form id="add-cuisine-form" action="#" method="post" enctype="multipart/form-data" className="w-50 mx-auto">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input id="add-name" type="text" className="form-control" name="name" required />
              </div>

              <div className="form-group">
                <label htmlFor="price">Price</label>
                <input id="add-price" type="number" className="form-control" name="price" required />
              </div>

              <div className="form-group">
                <label htmlFor="imageUrl">Image URL</label>
                <input id="add-imageUrl" type="text" className="form-control" name="imageUrl"
                  aria-describedby="basic-addon3 basic-addon4" required />
              </div>

              <div className="form-group">
                <label htmlFor="description">Description</label>
                <textarea id="add-description" className="form-control" name="description" rows="4" required></textarea>
              </div>

              <div className="form-group">
                <label htmlFor="authorId">Author ID</label>
                <input id="add-authorId" type="number" className="form-control" name="authorId" required />
              </div>

              <div className="form-group">
                <label htmlFor="categoryId">Category ID</label>
                <input id="add-categoryId" type="number" className="form-control" name="categoryId" required />
              </div>
              <br />

              <div className="d-flex justify-content-between">
                <button id="cancel-add-cuisine" type="button" className="btn btn-primary">Cancel</button>
                <button type="submit" className="btn btn-primary">Save</button>
              </div>
            </form>
          </div>
        </section> */}


      {/* <!-- EDIT CUISINE PAGE --> */}
      {/* <section id="edit-cuisine">
          <div className="container mt-5">
            <h2 className="mb-4 text-center">Edit Cuisine</h2>
            <form action="#" method="post" enctype="multipart/form-data" className="w-50 mx-auto">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input id="edit-name" type="text" className="form-control" name="name" required />
              </div>

              <div className="form-group">
                <label htmlFor="price">Price</label>
                <input type="number" className="form-control" name="price" required />
              </div>

              <div className="form-group">
                <label htmlFor="image">Image URL</label>
                <input type="text" className="form-control" aria-describedby="basic-addon3 basic-addon4" required />
              </div>

              <div className="form-group">
                <label htmlFor="description">Description</label>
                <textarea className="form-control" name="description" rows="4" required></textarea>
              </div>

              <div className="form-group">
                <label htmlFor="authorId">Author ID</label>
                <input type="number" className="form-control" name="authorId" required />
              </div>

              <div className="form-group">
                <label htmlFor="categoryId">Category ID</label>
                <input type="number" className="form-control" name="categoryId" required />
              </div>
              <br />
              <div className="d-flex justify-content-between">
                <button id="cancel-edit-cuisine" type="button" className="btn btn-primary">Cancel</button>
                <button type="submit" className="btn btn-primary">Save</button>
              </div>
            </form>
          </div>
        </section> */}


      {/* <!-- CATEGORIES TABLE --> */}
      {/* <div id="categories-table">
          <h2 className="text-center">The Cuisines</h2><br />
          <table className="table table-striped text-center">
            <thead>
              <tr>
                <th className="text-center">ID</th>
                <th className="text-center">Name</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="pt-3-half">1</td>
                <td className="pt-3-half">Indonesian Food</td>
              </tr>
              <tr>
                <td className="pt-3-half">2</td>
                <td className="pt-3-half">Chinese Food</td>
              </tr>
              <tr>
                <td className="pt-3-half">3</td>
                <td className="pt-3-half">Japanese Food</td>
              </tr>
            </tbody>
          </table>
          <div>
          </div>
        </div> */}

        <script type="module" src="/main.js"></script>
    </div>

  )
}

export default App
