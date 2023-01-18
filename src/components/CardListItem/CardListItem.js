import React, { useState } from "react";
import "./CardListItem.css";

const CardListItem = ({
  caption,
  title,
  description,
  taste,
  rations,
  bonus,
  weight,
  selected,
  available,
}) => {
  const [isSelected, setIsSelected] = useState(selected);
  const [isMouseOver, setIsMouseOver] = useState(true);

  let cardClasses = `offers__card card ${!available && "sold"} ${
    isSelected && "selected"
  } ${isSelected && isMouseOver && "mouse-left"}`;

  let captionClasses = `card__caption ${
    isMouseOver && isSelected && "mouse-left"
  }`;

  const cardDescription = () => {
    if (!available) {
      return `Печалька, ${taste} закночился`;
    }
    return available && isSelected ? (
      description
    ) : (
      <>
        Чего сидишь? Порадуй котэ, <span onClick={selectProduct}>купи</span>
      </>
    );
  };
  const miceName = (bonus) => {
    switch (bonus) {
      case 1:
        return "мышь";
      case 2:
        return "мыши";
      default:
        return "мышей";
    }
  };

  const selectProduct = () => {
    setIsSelected((state) => (state = !state));
  };
  const mouseOverHandler = () => {
    setIsMouseOver((state) => (state = !state));
    console.log(isMouseOver);
  };

  return (
    <div
      className={cardClasses}
      onMouseLeave={mouseOverHandler}
      onMouseEnter={mouseOverHandler}
    >
      <div className={captionClasses} onClick={selectProduct}>
        <span>{isSelected && isMouseOver ? "Котэ не одобряет?" : caption}</span>
      </div>
      <div className="card__background" onClick={selectProduct}>
        <div className="card__product product">
          <h3 className="product__title">{title}</h3>
          <p className="product__taste">{taste}</p>
          <p className="product__rations">
            <b>{rations}</b> порций
          </p>
          <p className="product__bonus">
            <b>{bonus}</b> {miceName(bonus)} в подарок
          </p>
          {rations >= 100 && <p className="product__extra">заказчик доволен</p>}
          <div className="product__weight">
            <p>{String(weight).replace(/\./, ",")}</p>
            <span>кг</span>
          </div>
        </div>
      </div>

      <p className="card__desc">{cardDescription()}</p>
    </div>
  );
};

export default CardListItem;
