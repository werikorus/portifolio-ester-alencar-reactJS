import React from "react";
import Icons from "../../components/Icons";

import "./styles.scss";

function PageHeader(){
  return(
    <header className="page-header">
      <div className="header-content">
        <h1 id="pageheader-title"><strong className="title">Ester C. Alencar</strong></h1>
        <p className="subtitle">DESIGNER GRÁFICO</p>
        <Icons />
      </div> 
    </header>
  )
};


export default PageHeader;