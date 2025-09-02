import { useState } from "react";
import Header from "./components/header";
import Menu from "./components/menu";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Library from "./pages/library";
import History from "./pages/history";
import Shorts from "./pages/shorts";
import Subscriptions from "./pages/subscriptions";
import Playlist from "./pages/playlists";

function App() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <BrowserRouter>
      <div className="App">
        <Header openMenu={openMenu} setOpenMenu={setOpenMenu} />
        <div style={{ width: '100%', display: 'flex' }}>
          <Menu openMenu={openMenu} />
          <div style={{ width: '100%' }}>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/history' element={<History />} />
              <Route path='/library' element={<Library />} />
              <Route path='/playlists' element={<Playlist />} />
              <Route path='/shorts' element={<Shorts />} />
              <Route path='/subscriptions' element={<Subscriptions />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
