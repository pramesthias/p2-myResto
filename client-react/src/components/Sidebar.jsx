import axios from "axios"
import { useState } from "react"

export const Sidebar = ({ search, setSearch, sort, setSort, filter, setFilter }) => {

  return (
    <>
      {/* <!-- SEARCH --> */}
      <div className="mb-3">
        <h5>Search</h5>
        <div className="input-group">
          <input id="search-name" name="search" type="text" value={search}
            onChange={(e) => setSearch(e.target.value)} className="form-control" placeholder="Search by Name" />
        </div>
      </div>

      {/* <!-- CHANGED --> */}
      <div className="card-body mt-4">
        <h5>Sort by</h5>
        <select name="sort" className="form-select" value={sort}
          onChange={(e) => setSort(e.target.value)}>
          <option value="">Date</option>
          <option value={"-createdAt"} >Date ASC</option>
          <option value={"createdAt"} >Date DESC</option>
        </select>
      </div>

      {/* <!-- FILTER --> */}
      <div className="card-body mt-4">
        <h5>Filter by</h5>

          <div class="form-check">
            <input class="form-check-input" onChange={(e) => setFilter(e.target.value)} type="checkbox" value="1" id="indonesianFood" />
            <label class="form-check-label" htmlFor="indonesianFood">
              Indonesian Food
            </label>
          </div>

          <div class="form-check">
            <input class="form-check-input" onChange={(e) => setFilter(e.target.value)} type="checkbox" value="2" id="chnChecked" />
            <label class="form-check-label" htmlFor="chnChecked">
              Chinese Food
            </label>
          </div>

          <div class="form-check">
            <input class="form-check-input" onChange={(e) => setFilter(e.target.value)}  type="checkbox" value="3" id="jpnChecked" />
            <label class="form-check-label" htmlFor="jpnChecked">
              Japanese Food
            </label>
          </div>

      </div>
    </>
  )

}



// const filterChange = (event) => {
//   setFilter(event.target.value)
// }