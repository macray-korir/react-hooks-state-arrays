import React, { useState } from "react";

const SpicyFoodList = () => {
  const [foods, setFoods] = useState([
    { id: 1, name: "Spicy Chicken Wings", heatLevel: 4, cuisine: "American" },
    { id: 2, name: "Mapo Tofu", heatLevel: 3, cuisine: "Sichuan" },
    { id: 3, name: "Green Curry", heatLevel: 2, cuisine: "Thai" },
    { id: 4, name: "Tacos al Pastor", heatLevel: 3, cuisine: "Mexican" },
  ]);

  const [filterBy, setFilterBy] = useState("All");

  function getNewSpicyFood() {
    const newFoodId = foods.length + 1;
    return {
      id: newFoodId,
      name: `New Food ${newFoodId}`,
      heatLevel: Math.floor(Math.random() * 5) + 1,
      cuisine: "Unknown",
    };
  }

  function handleAddFood() {
    const newFood = getNewSpicyFood();
    const newFoodArray = [...foods, newFood];
    setFoods(newFoodArray);
  }

  function handleLiClick(id) {
    const newFoodArray = foods.filter((food) => food.id !== id);
    setFoods(newFoodArray);
  }

  function handleFilterChange(event) {
    setFilterBy(event.target.value);
  }

  const foodsToDisplay = foods.filter((food) => {
    if (filterBy === "All") {
      return true;
    } else {
      return food.cuisine === filterBy;
    }
  });

  const foodList = foodsToDisplay.map((food) => (
    <li key={food.id} onClick={() => handleLiClick(food.id)}>
      {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
    </li>
  ));

  return (
    <div>
      <button onClick={handleAddFood}>Add New Food</button>
      <select name="filter" onChange={handleFilterChange}>
        <option value="All">All</option>
        <option value="American">American</option>
        <option value="Sichuan">Sichuan</option>
        <option value="Thai">Thai</option>
        <option value="Mexican">Mexican</option>
      </select>
      <ul>{foodList}</ul>
    </div>
  );
};

export default SpicyFoodList;
