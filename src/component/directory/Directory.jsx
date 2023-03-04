import React from "react";
import CategoryItem from "../category/Category-Item";
import "../../styles/categories.styles.scss";

const Directory = (props) => {
  return (
    <div className="categories-container">
      {props.categories.map((category) => (
        <CategoryItem category={category} key={category.id} />
      ))}
    </div>
  );
};

export default Directory;
