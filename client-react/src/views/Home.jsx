import { Card } from "../components/Card";
import { Navbar } from "../components/Navbar";
import { Sidebar } from "../components/Sidebar";


export default function Home() {
  return (
    <div id="app">
      <Navbar />
      < div id="home-page" className="container mt-4" >
        <div className="row">
          <Sidebar />
          {/* <!-- CUISINES MENU --> */}
          <div className="col-md-9 mt-4">
            <Card />
          </div>
        </div>
      </div >
    </div>
  )
}
