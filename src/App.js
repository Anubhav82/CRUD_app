import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Components/Home";
import AllBooks from "./Components/AllBooks";
import AddBooks from "./Components/AddBooks";
import Favourite from "./Components/Favourite";
import Footer from "./Components/Footer";
import EditBook from "./Components/EditBook";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/all_books" element={<AllBooks />} />
          <Route path="/add_book" element={<AddBooks />} />
          <Route path="/favourite" element={<Favourite />} />
          <Route path="/edit/:id" element={<EditBook />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
