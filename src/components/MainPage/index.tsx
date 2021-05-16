import React from "react";
import edt2 from "./../../assets/images/edicoes/ed2.svg";
import cartao3 from "./../../assets/images/cartoes/cart3.svg";
import pub1 from "./../../assets/images/publicidade/pub1.svg";
import rec1 from "./../../assets/images/UIDesign/rec1.svg";
import ind1 from "./../../assets/images/ind-visual/ind1.svg";
import Cards from "../Cards";

import "./styles.css";

const MainPage = () =>{
  return (
    <main id="MainPage">
      <div className="cardItems">
        <Cards
          title= "Edições"
          subtitle= "Edições aleatórias, montagens etc"
          img= {edt2}
          goToPage="/edicoes"
        />

        <Cards
          title= "Cartões de Visita"
          subtitle="Cartões de visita para empresas"
          img= {cartao3}
          goToPage="/cartoes"      
        />
        
        <Cards
          title="Publicidade"
          subtitle="Trabalhos de martketing"
          img={pub1}
          goToPage="/publicidade"
        />

        <Cards  
          title="Identidade Visual"
          subtitle="logomarcas etc"
          img={ind1}
          goToPage="/indentidadevisual"
        />

        <Cards  
          title="UI Design"
          subtitle="Prototipação de aplicações"
          img={rec1}
          goToPage="uidesign"
        />
      </div>
    </main>
  );
};

export default MainPage;