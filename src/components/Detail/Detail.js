import React from "react";

import "./Detail.scss";

import BodyPartImg from "../../assets/icons/body-part.png";
import TargetImg from "../../assets/icons/target.png";
import EquipmentImg from "../../assets/icons/equipment.png";

import Button from "../Button";

function Detail({ exercisesDetail }) {
  const { bodyPart, gifUrl, name, target, equipment } = exercisesDetail;
  const extraDetail = [
    {
      icon: BodyPartImg,
      name:bodyPart,
    },
    {
      icon: TargetImg,
      name:target,
    },
    {
      icon: EquipmentImg,
      name:equipment,
    },
  ]

  return (
    <div className="detail">
      <img src={gifUrl} alt={name} loading="lazy" className="detail__img" />
      <div className="detail__name">
        <h4>{name}</h4>
        <p>
          Exercises keep you strong.{name} is one of the best exercises to
          target yoour {target}. It will help you improve your mood and gain
          energy
        </p>
        {extraDetail.map((item,i)=>(
          <div key={i} className="detail__content">
            <Button>
              <img src={item.icon} alt={item.name}/>
            </Button>
            <span>{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Detail;
