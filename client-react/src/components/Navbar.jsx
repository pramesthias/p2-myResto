import { useState } from "react"

export const Navbar = () => {

    const [home, setHome] = useState(false);
    const [login, setLogin] = useState(false);
    const [register, setRegister] = useState(false);

    const handleHomeClick = () => {
        setHome(true);
      };
  
    const handleLoginClick = () => {
      setLogin(true);
    };
  
    const handleRegisterClick = () => {
      setRegister(true);
    };

    return (
        <div>
          <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
              <a className="navbar-brand" href="#">Restaurant App</a>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
    
                  <li className="nav-item">
                  <button id="register-button" type="button" className="nav-link" onClick={handleRegisterClick}>
                  Register
                </button>
                  </li>
                  <li className="nav-item">
                  <button id="logIn-button" type="button" className="nav-link" onClick={handleLoginClick}>
                  Log In
                </button>
                  </li>
                </ul>
    
              </div>
            </div>
          </nav>
    
          <header class="bg-dark py-3">
            <div class="text-center text-white">
              <h1 class="display-5 fw-bolder">My Restaurant</h1>
            </div>
          </header>
        </div>
    )
}