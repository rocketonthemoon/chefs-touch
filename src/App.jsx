import { ItemProvider } from "./context/ItemContext";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Footer from "./components/Footer";
import ItemPage from "./pages/ItemPage";

function App() {
  return (
    <Router>
      <ItemProvider>
        <div className="App font-play m-3 sm:text-xl">
          <NavBar />

          <div className="container mx-auto">
            <Routes>
              <Route exact path="/" element={<Home />}></Route>
              <Route exact path="/about" element={<About />}></Route>
              <Route exact path="/Item/:id" element={<ItemPage />}></Route>
              <Route path="/notfound" element={<NotFound />}></Route>
              <Route path="/*" element={<NotFound />}></Route>
            </Routes>
          </div>
          <Footer />
        </div>
      </ItemProvider>
    </Router>
  );
}

export default App;
