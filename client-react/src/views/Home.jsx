import { Card } from "../components/Card";

export default function Home() {
  return (
    < div id="home-page" className="container mt-4" >
      <div className="row">

        {/* <!-- CUISINES MENU --> */}
        <div className="col-md-9 mt-4">
          <Card />
        </div>
      </div>

      {/* <!-- PAGINATION --> */}
      <nav aria-label="Page navigation">
        <ul className="pagination mt-5 justify-content-center">
          <li className="page-item">
            <a className="page-link" href="#" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>
          <li className="page-item active"><a className="page-link" href="#">1</a></li>
          <li className="page-item"><a className="page-link" href="#">2</a></li>
          <li className="page-item">
            <a className="page-link" href="#" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>
        </ul>
      </nav>

    </div >
  )
}
