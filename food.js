import {onSnake , expandSnake} from './Snake.js';
import {randomGridPosition} from './grid.js';

let food = getNewFoodPosition();
const expansionRate = 1;

export function update() {
    if (onSnake(food)) {
        expandSnake(expansionRate);
        food = getNewFoodPosition();
    }
}

export function draw(gameBord) {
    const foodElement = document.createElement("div");
    foodElement.style.gridRowStart = food.y;
    foodElement.style.gridColumnStart = food.x;
    foodElement.classList.add("food");
    gameBord.appendChild(foodElement);
}


function getNewFoodPosition() {
    let newFoodPosition;
    while (newFoodPosition == null || onSnake(newFoodPosition)) {
        newFoodPosition = randomGridPosition()
    }
    return newFoodPosition
}