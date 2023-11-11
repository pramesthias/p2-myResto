import { useEffect, useState } from "react";
import { Card } from "../components/Card";
import { Navbar } from "../components/Navbar";
import { Sidebar } from "../components/Sidebar";
import axios from "axios";


import Pagination from 'react-bootstrap/Pagination';
// import { Pagination } from 'react-bootstrap';

export default function Home() {

  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [filter, setFilter] = useState("");
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1); //ADDED


  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: result } = await axios({  //dipersatu
          url: "https://resto-server-h8.pramresto.site/pub/cuisines",
          method: "get",
          params: {
            search,
            sort,
            filter,
            page
          }
        })
        let { data, totalPage, total } = result //added
        setTotalPage(totalPage) // added
        setData(data)
        console.log(data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [search, sort, filter, page])


  const PageNumber = () => {
    let result = []
    for (let number = 1; number <= totalPage; number++) {
      result.push(
        <Pagination.Item onClick={() => setPage(number)} key={number} active={number === page}>
          {number}
        </Pagination.Item>
      )
    }
    return result
  }


  return (
    <div id="app">
      <Navbar />
      < div id="home-page" className="container mt-4" >
        <div className="row">

          <div id="sidebar" className="col-md-3 sidebar">
            <Sidebar
              search={search} setSearch={setSearch}
              sort={sort} setSort={setSort}
              filter={filter} setFilter={setFilter}
            /><br></br>

            <div>
              <Pagination size="sm" className="mt-4">
                <Pagination.First onClick={() => setPage(1)} />
                <Pagination.Prev onClick={() => setPage(page > 1 ? page-1 : 1)} />
                <PageNumber />
            
                <Pagination.Next onClick={() => setPage(page < totalPage ? page+1 : totalPage)} />
                <Pagination.Last onClick={() => setPage(totalPage)}/>
              </Pagination>
           
          </div>
        </div>

        <div className="col-md-9 mt-4">
          <div id="cuisines-card" className="row row-cols-2 row-cols-md-5 g-4">
            {data.map((c) => (
              <Card key={c.id} cuisine={c} />
            ))}
          </div>
        </div>
      </div>
    </div >
    </div >

  )
}
