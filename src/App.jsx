import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home";
import { MyListFilm } from "./pages/MyListFilm";
import { AddFilm } from "./pages/AddFilm";
import { DetailFilm } from "./pages/DetailFilm";
import { Profile } from "./pages/Profile";
import { API, setAuthToken } from "./api/api";
import { FilmsContextProvider } from "./context/filmsContext";
import { useEffect } from "react";

function App() {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  return (
    <FilmsContextProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/MyListFilm/" element={<MyListFilm />} />
        <Route path="/AddFilm/" element={<AddFilm />} />
        <Route path="/DetailFilm/:id" element={<DetailFilm />} />
        <Route path="/Profile/" element={<Profile />} />
      </Routes>
    </FilmsContextProvider>
  );
}

export default App;
