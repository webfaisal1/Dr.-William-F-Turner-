import { Fragment } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./pages/Shared/Footer/Footer";
import Header from "./pages/Shared/Header/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home/Home";
import About from "./pages/Home/About/About";
import Blog from "./pages/Home/Blog/Blog";
import Login from "./pages/Home/Login/Login";
import SignUp from "./pages/Home/SignUp/SignUp";

function App() {
  return (
    <Fragment>
      <Header />

          <Routes>
            <Route path="/" element={<Home/>} ></Route>
            <Route path="/about" element={<About/>} ></Route>
            <Route path="/blog" element={<Blog/>} ></Route>
            <Route path="/login" element={<Login/>} ></Route>
            <Route path="/signUp" element={<SignUp/>} ></Route>
          </Routes>

      <Footer />
    </Fragment>
  );
}

export default App;
