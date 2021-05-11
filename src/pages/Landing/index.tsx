import React from "react";
import "./styles.css";
import PageHeader from "../../components/PageHeader";
import Footer from "../../components/Footer";
import MainPage from "../../components/MainPage";

function Landing(){
  return (
      <div id="page-landing">
        <PageHeader />
        <MainPage />
        <Footer/>        
      </div>      
  );
};

export default Landing;