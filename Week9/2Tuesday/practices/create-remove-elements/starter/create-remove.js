// Making buttons interactive

// Add dog button
const add = document.getElementById("add");
add.addEventListener("click", async () => {
  try {
    const res = await fetch("https://dog.ceo/api/breeds/image/random");
    const data = await res.json();

    // URL of new dog image
    const url = data.message;

    console.log("url ", url);

    let breed = url.split("/");

    console.log("breed from split ", breed);
    breed = breed[breed.length - 2];

    console.log("breed ", breed);
    // const dog = `<li><figure><img src=${url}><figcaption>${breed}</figcaption></figure></li>`
    const figcaption = document.createElement("figcaption");
    const img = document.createElement("img");
    const figure = document.createElement("figure");
    const li = document.createElement("li");
    figure.append(img);
    figure.append(figcaption);
    li.append(figure);
    img.src = url;
    figcaption.innerText = breed;
    const list = document.querySelector("ul");
    list.append(li);

    // Get breed (Hint: Parse from URL)
    // const breed = url.split('/')[4];

    // // Create element to inject
    // const newDog = document.createElement("li");

    // const newFigure = document.createElement("figure");

    // const newImg = document.createElement("img");
    // newImg.src = url;

    // const newCaption = document.createElement("figcaption");
    // newCaption.innerText = breed;

    // newFigure.appendChild(newImg);
    // newFigure.appendChild(newCaption);

    // newDog.appendChild(newFigure);

    // // Inject element into correct location
    // const ul = document.getElementsByTagName("ul")[0];
    // ul.appendChild(newDog);
  } catch (e) {
    console.log("Couldn't fetch dog :(");
  }
});

// Remove first dog button
const removeFirst = document.getElementById("remove-first");
removeFirst.addEventListener("click", () => {
  // Select first dog
  // Remove
  const firstCard = document.querySelector("li");

  firstCard.remove();
});

// Remove last dog button
const removeLast = document.getElementById("remove-last");
removeLast.addEventListener("click", () => {
  // Select last dog
  // Remove
  const cardArr = document.querySelectorAll("li");

  cardArr[cardArr.length - 1].remove();
});
