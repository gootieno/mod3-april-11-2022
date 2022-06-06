const sanboxFunc = () => {
  console.log("Inside sanbox.js");
};

// handle single export
const imUsedEveryWhere = ({ username, password }) => {
  // i do something with username & password

  console.log("You can use this function anywhere");
};

console.log(sanboxFunc());
