import React from "react";
import CardListItem from "../CardListItem/CardListItem";
import "./CardList.css";

const CardList = ({ data }) => {
  return (
    <div className="app__offers offers">
      {data.map((item) => {
        return <CardListItem {...item} key={item.id} />;
      })}
    </div>
  );
};

export default CardList;
