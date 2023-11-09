import { useState } from "react"
import { Link } from "react-router-dom";

export const Navbar = () => {

  // const [home, setHome] = useState(false);

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="/pub/cuisines">Restaurant App</a>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/register">Register</Link>
              </li>
              <li className="nav-item">
                <Link to="/login">Log In</Link>
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