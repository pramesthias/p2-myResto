import axios from "axios"
import { useState } from "react"

export const Sidebar = ({searchResult, sortResult, filterResult}) => {  //onSortChange

  const [search, setSearch] = useState("")
  const [sort, setSort] = useState("")
  const [filter, setFilter] = useState("")

  const handleSearch = async () => {
    try {
      const {data} = await axios.get(`http://localhost:3000/pub/cuisines?search=${search}`)
      searchResult(data)
    } catch (error) {
      console.log(error)
    }
  }

  const handleSort = async () => {
    try {
      const {data} = await axios.get(`http://localhost:3000/pub/cuisines?sort=${sort}`)
      sortResult(data)
    } catch (error) {
      console.log(error)
    }
  }

  const handleFilter = async () => {
    try {
      const {data} = await axios.get(`http://localhost:3000/pub/cuisines?filter=${filter}`)
      filterResult(data)
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <div id="sidebar" className="col-md-3 sidebar">

      {/* <!-- SEARCH --> */}
      <div className="mb-3">
        <h5>Search</h5>
        <div className="input-group">
          <input id="search-name" name="search" type="text" value={search}
          className="form-control" placeholder="Search by Name" 
          onChange={(event) => setSearch(event.target.value)}/>
          <button className="btn btn-primary" type="submit" onSubmit={handleSearch}>Search</button>
        </div>
      </div>

      {/* <!-- CHANGED --> */}
      <div className="card-body mt-4">
        <h5>Sort by</h5>
        <select name="sort" className="form-select" value={sort}
        onChange={(event) => setSort(event.target.value)}>
          <option value="-createdAt" onClick={handleSort}>Date Ascending</option>
          <option value="createdAt" onClick={handleSort}>Date Descending</option>
        </select>
      </div>

      {/* <!-- FILTER --> */}
      <div className="card-body mt-4">
        <h5>Filter by Category</h5>
        <select name="filter" className="form-select" value={filter}
        onChange={(event) => setFilter(event.target.value)}>
          <option value="1" onClick={handleFilter}>Indonesian Food</option>
          <option value="2" onClick={handleFilter}>Chinese Food</option>
          <option value="3" onClick={handleFilter}>Japanese Food</option>
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



  // const filterChange = (event) => {
  //   setFilter(event.target.value)
  // }