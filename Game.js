import {
  update as updateSnake,
  draw as drawSnake,
  getSnakeHead,
  snakeIntersection,
  sccore,
} from "./Snake.js";
import { update as updateFood, draw as drawFood } from "./food.js";
import { outSideGrid } from "./grid.js";

let lastRenderTime = 0;
const gameBord = document.getElementById("Game");
const yourSccore = document.getElementById("Score");
const play = document.getElementById("play");
const replay = document.getElementById("replay");
let snakeSpeed = 8;
let sppedSetting;
let miureSccor = 0;
let hiSccore = JSON.parse(localStorage.getItem("hiSccore"));
let gameOver = false;
let gamePuse = true;

window.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    document.getElementById("setting").focus();
    console.log("clicckesd");
  }
});

document.getElementById("setting").onchange = function () {
  sppedSetting = document.getElementById("setting").value;
  document.getElementById("setting").blur();
  play.onclick = function () {
    if (sppedSetting === "slow") {
      snakeSpeed = 2;
    }

    if (sppedSetting === "normal") {
      snakeSpeed = 8;
    }

    if (sppedSetting === "spped") {
      snakeSpeed = 11;
    }
    document.getElementsByClassName("info")[0].style.display = "none";
    window.requestAnimationFrame(main);
  };

  window.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      play.click();
    }
  });
};

function main(currentTime) {
  if (gameOver) {
    document.getElementById("game-over").style.visibility = "visible";
    replay.onclick = function () {
      window.location.reload(true);
    };

    window.addEventListener("keyup", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        replay.click();
      }
    });
    return;
  }

  window.requestAnimationFrame(main);
  const secondsSinceLestRender = (currentTime - lastRenderTime) / 1000;
  if (secondsSinceLestRender < 1 / snakeSpeed) return;

  lastRenderTime = currentTime;

  play.style.display = "none";
  if (gamePuse) {
    document.getElementById("setting").blur();
    update();
    draw();
  }

  window.addEventListener("keyup", (e) => {
    if (e.key === "Escape") {
      e.preventDefault();
      if (gamePuse) {
        gamePuse = false;
        document.getElementById(
          "escape"
        ).innerHTML = `<p>Click it again to complete the game</p>`;
        document.getElementsByClassName("info")[0].style.display = "block";
      } else {
        gamePuse = true;
        document.getElementById("escape").innerHTML = "";
        document.getElementsByClassName("info")[0].style.display = "none";
      }
    }
  });

  gamePused();
}

function update() {
  updateSnake();
  updateFood();
  checkDeath();
  addSccore();
  addHisccore();
}

function draw() {
  gameBord.innerHTML = "";
  drawSnake(gameBord);
  drawFood(gameBord);
}

function gamePused() {
  if (gamePuse) {
    console.log("gamePuse");
  }
}

function checkDeath() {
  gameOver = outSideGrid(getSnakeHead()) || snakeIntersection();
}

function addSccore() {
  yourSccore.innerHTML = `<h2>Your Sccore : ${sccore} </h2> <br />`;
}

function addHisccore() {
  if (sccore > miureSccor) {
    miureSccor = sccore;
  }
  if (miureSccor > hiSccore) {
    localStorage.setItem("hiSccore", JSON.stringify(miureSccor));
  }
  document.getElementById(
    "muireScore"
  ).innerHTML = `<h2>Best Sccore: ${hiSccore}</h2>`;
}
