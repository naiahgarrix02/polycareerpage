import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Positions from "./components/Positions"
import PositionDetails from "./pages/PositionDetails"

function App() {
  

  return (
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Positions />
              </>
            }
          />
          <Route path="/positions/:id" element={<PositionDetails />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App
