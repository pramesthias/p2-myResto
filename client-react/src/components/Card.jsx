import { Link } from "react-router-dom";


export const Card = ({ cuisine }) => {
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const { data } = await axios.get("http://localhost:3000/pub/cuisines");
  //       console.log(data)
  //       setData(data)
  //     } catch (error) {
  //       console.log(error)
  //     }
  //   }
  //   fetchData()
  // }, [])

  return (
    <div className="col">
      <div className="card text-center">
        <img className="card-img-top"
          src={cuisine.imgUrl}
          alt={cuisine.name} />
        <div className="card-body">
          <h5 className="card-title text-center">{cuisine.name}
          </h5>
          <Link to={`/pub/cuisines/${cuisine.id}`}>
            <button type="button" className="btn btn-outline-dark flex-shrink-0">
              Read More
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
