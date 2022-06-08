const select = () => {
  /* Write queries for each of the following */

  /* PART 1 */
  // Get all seeded fruit elements
  const seeds = document.getElementsByClassName("seed");
  console.log("seeds", seeds);
  // Get all seedless fruit elements
  const seedless = document.getElementsByClassName("seedless");
  console.log("seedless", seedless);
  // Get first seedless fruit element

  const firstSeedless = document.querySelector("li.seedless");
  console.log("first seedless", firstSeedless);

  /* PART 2 */
  // Get inner span with text "you"
  const findYou = document.querySelectorAll("span");
  console.log("find you", findYou);
  // Get all children of element "wrapper"
  let childrenOfWrapper = document.getElementById("wrapper").children;

  console.log("children of wrappper", childrenOfWrapper);
  // Get all odd number list items in the list

  const odds = document.querySelectorAll(".odd");
  console.log("odds", odds);

  // const evens = Array.from(document.querySelectorAll("#two > ol > li")).filter(
  //   (node) => node.className !== "odd"
  // );

  const evens = document.querySelectorAll("ol > li:not(.odd)");

  // Add/Remove Event Attributes, Add Inline-Styling with JS,
  function findEvens() {
    const lists = window.document.getElementsByTagName("li");
    let liList = [];
    for (let i = 0; i < lists.length; i++) {
      let each = lists[i];
      if (each.classList.length === 0 && each.innerText) {
        liList.push(each);
        console.log('single li, ',each);
      }
    }
    return liList;
  }
  console.log("evens", findEvens(), evens);
  // Get all even number list items in the list

  /* PART 3 */
  // Get all tech companies without a class name

  // Get "Amazon" list element

  // Get all unicorn list elements (not the image element)

  const nameless = document.querySelector("a");
  console.log("nameless", nameless);

  // Get "Amazon" list element
  const amazon = document.getElementsByClassName("shopping");
  console.log("shopping", amazon);

  // Get all unicorn list elements (not the image element)
  const unicorns = document.querySelectorAll("#three > ul")[0].children;
  console.log("unicorns", unicorns);
};

window.onload = select;
