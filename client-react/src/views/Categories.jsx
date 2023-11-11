import axios from "axios";
import { useEffect, useState } from "react";
import { Navbar } from "../components/Navbar";
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';

export default function Categories() {

  const [data, setData] = useState([]);
  const token = localStorage.getItem("access_token")

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get("https://resto-server-h8.pramresto.site/categories",
          {
            headers: {
              Authorization: `Bearer ${token}`
            }
          });
          setData(data)
          // console.log(data)
      } 
      // catch (error) {
      //   console.log(error)
      // }
      catch ({ response }) {
        toast.error(response.data.message, {
          position: 'top-center',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
        });
        console.log(error)
      }
    }
    fetchData()
  }, [])

  return (
    <>
      {/* <Navbar /> */}
      <header className="bg-dark py-3">
        <div className="text-center text-white">
          <h1 className="display-5 fw-bolder">The Categories</h1>
        </div>
      </header>
      <div id="categories-table" className="mt-5">
        <Link to={"/cuisines"}>
          <span><button id="admin-page-button" type="button"
            className="btn btn-outline-dark flex-shrink-0 top-0 end-0 ms-3">
            Admin Page
          </button></span>
        </Link>
        {/* <h2 className="text-center">The Categories</h2><br /> */}
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

