import React from "react";

const ListItem = ({ name, link, icon, bgColor }) => {
  return (
    <div
      className="listItem"
      style={{
        backgroundColor: bgColor,
        height: 30
      }}
    >
      <img src={icon} alt={name} />
      <a href={link}>{name}</a>
    </div>
  );
};

export default ListItem;
