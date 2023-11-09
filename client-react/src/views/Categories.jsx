import axios from "axios";
import { useEffect, useState } from "react";


export default function Categories() {

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios("http://localhost:3000/categories");
        console.log(data)
        setData(data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [])

  return (
    <div id="categories-table" className="mt-3">
      <h2 className="text-center">The Cuisines</h2><br />
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
  )
}

