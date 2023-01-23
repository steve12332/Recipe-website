import React from "react";
import style from "./recipe.module.css";

const Recipe = ({title, calories, image, ingredients}) => {
    return(
        <div className = {style.recipe}>
            <h1>{title}</h1>
            <h2>Ingredients</h2>
            <ol>
                {ingredients.map(ingredients => (
                    <li>
                        {ingredients.text}
                    </li>
                ))}
            </ol>
            <h2>Calories</h2>
            <p>{calories}</p>
            <img className = {style.image} src = {image} alt = ""></img>
        </div>
    );
};

export default Recipe;