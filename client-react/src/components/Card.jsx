// import PropTypes from 'prop-types'
// import axios from "axios";

export const Card = ({c}) => {

    return (
        // {card.map((c) => (
            <div key={c.id} className="col">
              <div className="card text-center">
                <img className="card-img-top"
                  src={c.imageUrl}
                  alt={c.name} />
                <div className="card-body">
                  <h5 className="card-title text-center">{c.name}
                  </h5>
                  <button id="read-more-button" type="button" className="btn btn-outline-dark flex-shrink-0">
                    Read More
                  </button>
                </div>
              </div>
            </div>
            )
        }

// Card.propTypes = {
//     card: {
//         id: PropTypes.number,
//         name: PropTypes.string,
//         imageUrl: PropTypes.string,
//     }

// }