//!!START SILENT
// import Game from "../js/game.js";

//!!END
window.onload = () => {
  document.getElementById("wrapper").style.backgroundColor = "red";
  const game = new Game();
  game.start();
};
