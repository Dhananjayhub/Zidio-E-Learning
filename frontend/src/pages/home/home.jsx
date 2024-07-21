import React from "react";
import { useNavigate } from "react-router-dom";
import "./home.css";
import Sucess_Story from "../../components/Sucess_Story/Sucess_Story";


const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="img">
      <div className="home">
       
        <div className="home-content">
          <h1>Welcome Learner ....</h1>
          <p>.</p>
          <button onClick={() => navigate("/courses")} className="common-btn">
            Get Started
          </button>
        </div>
      </div>
      <Sucess_Story />
    </div>
  );
};

export default Home;
