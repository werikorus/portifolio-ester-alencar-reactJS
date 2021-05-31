import React from "react";
import Icons from "../../components/Icons";

import "./styles.css";

function PageHeader(){
  return(
    <header className="page-header">
      <div className="header-content">
        <strong className="title">Ester C. Alencar</strong>
        <p className="subtitle">D E S I G N E R  G R Á F I C O</p>
        <Icons />
      </div> 
    </header>
  )
};


export default PageHeader;