import React from "react";

import Icon from "../../assets/icons/gym.png";

import "./BodyPart.scss";
function BodyPart({ item, setBodyPart, bodyPart }) {
  return (
    <div
      className={bodyPart === item ? "bodypart active" : "bodypart"}
      onClick={()=>
        setBodyPart(item)
        
      }
    >
      <img src={Icon} alt="dumbbell" className="bodypart__icon" />
      <div className="bodypart__item">{item}</div>
    </div>
  );
}

export default BodyPart;
