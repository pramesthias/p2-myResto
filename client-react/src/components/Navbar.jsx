import { useState } from "react"
import { Link } from "react-router-dom";

export const Navbar = () => {

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link to={"/pub/cuisines"}>
            <span><button id="regis-button" type="button"
              className="navbar-brand btn btn-outline-dark top-0 end-0 ms-3 mt-2">
              Home
            </button></span>
          </Link>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">

              <li className="nav-item">
                <Link to={"/add-users"}>
                  <span><button id="regis-button" type="button"
                    className="btn btn-outline-dark flex-shrink-0 top-0 end-0 ms-3 mt-2">
                    Register
                  </button></span>
                </Link>
              </li>

              <li className="nav-item">
                <Link to={"/login"}>
                  <span><button id="login-button" type="button"
                    className="btn btn-outline-dark flex-shrink-0 top-0 end-0 ms-3 mt-2">
                    Log In
                  </button></span>
                </Link>
              </li>

              <li className="nav-item">
                <Link to={"/cuisines"}>
                  <span><button id="admin-button" type="button"
                    className="btn btn-outline-dark flex-shrink-0 top-0 end-0 ms-3 mt-2">
                    Admin Page
                  </button></span>
                </Link>
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
  )
}