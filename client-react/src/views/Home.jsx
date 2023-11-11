import { useEffect, useState } from "react";
import { Card } from "../components/Card";
import { Navbar } from "../components/Navbar";
import { Sidebar } from "../components/Sidebar";
import axios from "axios";


export default function Home() {

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get("http://localhost:3000/pub/cuisines");
        console.log(data)
        setData(data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [])


  const [searchData, setSearchData] = useState([])
  const [sortData, setSortData] = useState([])
  const [filterData, setFilterData] = useState([])

  const searchInput = (searchData) => {
    setSearchData(searchData)
  }

  const sortInput = (sortData) => {
    setSortData(sortData)
  }

  const filterInput = (filterData) => {
    setFilterData(filterData)
  }

  return (
    <div id="app">
      <Navbar />
      < div id="home-page" className="container mt-4" >
        <div className="row">
          <Sidebar />
          <div className="col-md-9 mt-4">
          <div id="cuisines-card" className="row row-cols-2 row-cols-md-5 g-4">
            {data.map((c) => (
                <Card key={c.id} cuisine={c} />
            ))}
              </div>
          </div>
        </div>
      </div >
    </div>
  )
}
