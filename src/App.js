import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Components/Home";
import AllBooks from "./Components/AllBooks";
import AddBooks from "./Components/AddBooks";
import Favourite from "./Components/Favourite";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/all_books" element={<AllBooks />} />
          <Route exact path="/add_book" element={<AddBooks />} />
          <Route exact path="/favourite" element={<Favourite />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
