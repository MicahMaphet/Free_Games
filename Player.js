console.log("Character.js succesfuly started");
import { alive } from "./script.js";
player = new alive(0, 0);
function chartick() {
  Player.style.left = player.x;
  Player.style.bottom = player.y
}
function movement(_changex, _changey) {
  player.x += _changex;
  player.y += _changey;
}
document.addEventListener("keydown", event => {
    if (event.key === "UpArrow") {
        movement(10, -10);
    }
  });

export {chartick};