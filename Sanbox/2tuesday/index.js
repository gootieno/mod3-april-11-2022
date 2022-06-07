const colorChange = () => {
  const blueTitle = document.getElementsByTagName("h1");
  console.log("blue title selected", blueTitle);

  const redTitle = document.getElementById("red");
  console.log("red title selected ", redTitle);
};

window.onload = colorChange;
