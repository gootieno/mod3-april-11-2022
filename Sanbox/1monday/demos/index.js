import  * as sanboxUtils from '/path/to/file'


const importFunction = () => {
  // call imports here
  console.log("In the import function");
  document.body.children[0].style.color = "blue";
};

// window.onload can let us style the h1 after loading assets

window.onload = () => {
  // js here
};
console.log("Index JS File");

// console.log(importFunction());


