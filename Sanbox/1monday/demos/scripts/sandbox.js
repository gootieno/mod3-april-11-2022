const sanboxFunc = () => {
  console.log("Inside sanbox.js");
};

// handle single export
export const imUsedEveryWhere = (id) => {
  // i do something with username & password

  console.log("You can use this function anywhere");
};

console.log(sanboxFunc());

// export default sanboxFunc;

export default () => {
  
}
