import React, { useContext } from "react";
import BodyPart from "../BodyPart/BodyPart";
import ExerciseCard from "../ExerciseCard/ExerciseCard";

import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";

import "./HorizontalScroll.scss";

import LeftArrowIcon from "../../assets/icons/left-arrow.png";
import RightArrowIcon from "../../assets/icons/right-arrow.png";

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);
  return (
    <div onClick={() => scrollPrev()} className="arrow">
      <img src={LeftArrowIcon} alt="left" />
    </div>
  );
};
const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);
  return (
    <div onClick={() => scrollNext()} className="arrow">
      <img src={RightArrowIcon} alt="left" />
    </div>
  );
};

function HorizontalScroll({ data, bodyPart, setBodyPart, isBodyParts }) {
  return (
    <ScrollMenu
      LeftArrow={LeftArrow}
      RightArrow={RightArrow}
      className="horizontal"
    >
      {data.map((item, i) => (
        <div
          key={i}
          itemID={item.id || item}
          title={item.id || item}
          className="horizontal__item"
        >
          {isBodyParts ? (
            <BodyPart
              item={item}
              bodyPart={bodyPart}
              setBodyPart={setBodyPart}
            />
          ) : (
            <ExerciseCard exercise={item} />
          )}
        </div>
      ))}
    </ScrollMenu>
  );
}

export default HorizontalScroll;
