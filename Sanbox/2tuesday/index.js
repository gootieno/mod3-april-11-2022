const colorChange = () => {
  const blueTitle = document.getElementsByTagName("h1")[1];
  console.log("blue title selected", blueTitle);

  blueTitle.style.color = "blue";
  blueTitle.setAttribute("class", "titles");

  const redTitle = document.getElementById("red");
  console.log("red title selected ", redTitle);

  redTitle.style.color = "rgb(255,0,0)";
};

window.onload = colorChange;
