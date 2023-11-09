import { Navbar } from "./components/Navbar"
import Cuisines from "./views/Cuisines"
import Home from "./views/Home"


function App() {

  return (
    <div id="app">
      <Navbar />
      {/* <Home /> */}
      <Cuisines />
      {/* <script type="module" src="/main.js"></script> */}
    </div>

  )
}

export default App
