import { Link } from "react-router-dom";

export const Card = ({ cuisine }) => {

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
