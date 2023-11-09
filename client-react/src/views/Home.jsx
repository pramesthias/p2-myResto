
      {/* <!-- NAVBAR --> */}
      {/* <div>
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
      </div> */}


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
          <div className="col-md-9 mt-4">
            <div id="cuisines-card" className="row row-cols-2 row-cols-md-5 g-4">

              {card.map((c) => (
                <Card c={c} key={c.id} />
              ))}

            </div>
          </div>
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