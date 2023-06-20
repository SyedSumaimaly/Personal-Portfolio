import Home from "./Containers/Home/Home";
import Resume from "./Containers/Resume/Resume";
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
        <Route path="/Resume" element={<Resume />} />
        <Route path="/Portfolio" element={<Portfolio />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;