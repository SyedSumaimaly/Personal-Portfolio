import Home from "./Containers/Home/Home";
import Skills from "./Containers/Skills/Skills";
import Portfolio from "./Containers/Portfolio/Portfolio";

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Skills" element={<Skills/>} />
        <Route path="/Portfolio" element={<Portfolio />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;