import React  from "react";
import photoshopIcon from "../../assets/images/photoshop.svg";
import illustratorIcon from "../../assets/images/illustrator.svg";
import figmaIcon from "../../assets/images/figma.svg";
import "./styles.css";

const Icons = () =>{
  return(
      <div className="icons-img">
          <img src={photoshopIcon} alt="photoshop" id="photoshop-img"/>
          <img src={illustratorIcon} alt="illutstrator" id="illustrator-img"/>
          <img src={figmaIcon} alt="figma" id="figma-img"/>
      </div>
  );
};

export default Icons;