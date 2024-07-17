import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./pages/home/home";
import About from "./pages/about/About";
import Courses from "./pages/courses/Courses";
import Loading from "./components/loading/Loading";
import Account from "./pages/account/Account";
import { UserData } from "./context/UserContext";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Verify from "./pages/auth/Verify";
import Footer from "./components/footer/Footer";

const App = () => {
  const { isAuth, user, loading } = UserData();
  return (
    <>
      {loading ? <Loading /> : <BrowserRouter>
        <Header isAuth={isAuth} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<Courses />} />

          <Route
              path="/account"
              element={isAuth ? <Account user={user} /> : <Login />}
            />
            <Route path="/login" element={isAuth ? <Home /> : <Login />} />

          <Route path="/register" element={isAuth ? <Home /> : <Register />} />
          <Route path="/verify" element={isAuth ? <Home /> : <Verify />} />
        </Routes>

        <Footer />
      </BrowserRouter>}
    </>
  );
};

export default App;
