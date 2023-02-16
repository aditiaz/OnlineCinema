import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home";
import { MyListFilm } from "./pages/MyListFilm";
import { AddFilm } from "./pages/AddFilm";
import { DetailFilm } from "./pages/DetailFilm";
import { Profile } from "./pages/Profile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/MyListFilm/" element={<MyListFilm />} />
        <Route path="/AddFilm/" element={<AddFilm />} />
        <Route path="/DetailFilm/" element={<DetailFilm />} />
        <Route path="/Profile/" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
