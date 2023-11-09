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
          <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
              <a class="navbar-brand" href="#">Restaurant App</a>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
    
                  <li class="nav-item">
                  <button id="register-button" type="button" className="nav-link" onClick={handleRegisterClick}>
                  Register
                </button>
                  </li>
                  <li class="nav-item">
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