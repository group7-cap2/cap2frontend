import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { Nav } from "./components/Nav";
import { Home } from "./components/Home";
import { Media } from "./components/Media";
import { Favorite } from "./components/Favorite";
import { Songs } from "./components/Songs";
import { SongInfo } from "./components/SongInfo";
import { Podcasts } from "./components/Podcasts";
import { PodcastInfo } from "./components/PodcastInfo";
import { Musicvid } from "./components/MusicVideos";
import { MusicVideoInfo } from "./components/MusicVideoInfo";
import { AudioBook } from "./components/AudioBooks";
import { AudioBookInfo } from "./components/AudioBookInfo";
import { Movies } from "./components/Movies";
import { MovieInfo } from "./components/MoiveInfo";
import { Rock } from "./components/Rock";
import { Pop } from "./components/Pop";
import { Kpop } from "./components/Kpop";
import { Soul } from "./components/Soul";



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
          <Route exact path="/song/info" element={<SongInfo />} />
          <Route exact path="/podcasts" element={<Podcasts />} />
          <Route exact path="/podcast/info" element={<PodcastInfo />} />
          <Route exact path="/musicvid" element={<Musicvid />} />
          <Route exact path="//musicvideo/info" element={<MusicVideoInfo />} />
          <Route exact path="/audiobook" element={<AudioBook />} />
          <Route exact path="/audiobook/info" element={<AudioBookInfo />} />
          <Route exact path="/movies" element={<Movies />} />
          <Route exact path="/movie/info" element={<MovieInfo />} />
          <Route exact path="/rock" element={<Rock />} />
          <Route exact path="/pop" element={<Pop />} />
          <Route exact path="/kpop" element={<Kpop />} />
          <Route exact path="/soul" element={<Soul />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
