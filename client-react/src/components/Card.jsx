
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Card = () => {
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

  return (
    <div id="cuisines-card" className="row row-cols-2 row-cols-md-5 g-4">
      {data.map((c) => (
        <div key={c.id} className="col">
          <div className="card text-center">
            <img className="card-img-top"
              src={c.imgUrl}
              alt={c.name} />
            <div className="card-body">
              <h5 className="card-title text-center">{c.name}
              </h5>
              <Link to={`/pub/cuisines/${c.id}`}>
                <button type="button" className="btn btn-outline-dark flex-shrink-0">
                  Read More
                </button>
              </Link>
            </div>
          </div>
        </div>))}
    </div>
  )
}
