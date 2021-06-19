import React from "react";
import "./styles.scss";
import PageHeader from "../../components/PageHeader";
import Footer from "../../components/Footer";
import MainPage from "../../components/MainPage";

function Landing(){
  return (
      <div className="page-landing">
        <PageHeader />
        <MainPage />
        <Footer/>        
      </div>      
  );
};

export default Landing;