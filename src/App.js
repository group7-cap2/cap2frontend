import "./App.css";
import { Route, Routes  } from "react-router-dom";

import { Header } from "./components/Header" ;
import { Nav } from "./components/Nav";
import { Home } from "./components/Home";
import { Media } from "./components/Media";


function App() {
  return <div className="App">

    <Header />
    <Nav />
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/media/:type" element={<Media/>} />
      
    </Routes>

  </div>;
}

export default App;
