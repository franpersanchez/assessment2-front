import "./App.css";
import Home from "./Pages/Home";
import Passenger from "./Pages/Passenger";
import Booking from "./Pages/Booking";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="passenger" element={<Passenger />} />
            <Route path="booking" element={<Booking />} />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
