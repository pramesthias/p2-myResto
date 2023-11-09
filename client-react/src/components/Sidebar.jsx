
export const Sidebar = () => {

  return (
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
        <h5>Sort by</h5>
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
  )

}

