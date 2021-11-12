import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { Nav } from "./components/Nav";
import { Home } from "./components/Home";
import { Media } from "./components/Media";
import { Favorite } from "./components/Favorite";
import { Songs } from "./components/Songs";

function App() {
  return (
    <div className="App">
      <div className="Wrapper">
        <Header />
        <Nav />
        <Routes>
          <Route exact path="/Favorite" element={<Favorite />} />
          <Route exact path="/" element={<Home />} />
          <Route exact path="/media" element={<Media />} />
          <Route exact path="/songs" element={<Songs />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
