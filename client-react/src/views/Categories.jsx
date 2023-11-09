import axios from "axios";
import { useEffect, useState } from "react";
import { Navbar } from "../components/Navbar";
import { Link } from "react-router-dom";


export default function Categories() {

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get("http://localhost:3000/categories");
        console.log(data)
        setData(data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [])

  return (
    <>
      <Navbar />
      <div id="categories-table" className="mt-5">
      <Link to={"/cuisines"}>
          <span><button id="add-cuisine-button" type="button" 
            className="btn btn-outline-dark flex-shrink-0 top-0 end-0 ms-3">
            Admin Page
          </button></span>
        </Link>
        <h2 className="text-center">The Categories</h2><br />
        <table className="table table-striped text-center">
          <thead>
            <tr>
              <th className="text-center">ID</th>
              <th className="text-center">Name</th>
            </tr>
          </thead>
          <tbody>

            {data.map((d) => (
              <tr key={d.id}>
                <td className="pt-3-half">{d.id}</td>
                <td className="pt-3-half">{d.name}</td>
              </tr>
            ))}

          </tbody>
        </table>

      </div>
    </>
  )
}

