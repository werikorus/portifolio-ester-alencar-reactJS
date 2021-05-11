import React from "react";
import Icons from "../../components/Icons";

import "./styles.css";

function PageHeader(){
  return(
    <header className="page-header">
      <div className="header-content">
        <strong className="title">Ester C. Alencar</strong>
        <p className="subtitle">DESIGNER GRÁFICO</p>
        <Icons />
      </div>
    </header>
  )
};


export default PageHeader;