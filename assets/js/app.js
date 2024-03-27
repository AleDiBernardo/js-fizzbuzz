const row = document.querySelector(".row");

for (let i = 0; i <= 107; i++) {
  const squareElem = document.createElement("div");
  squareElem.classList = "square";

  //Console
  if (i % 3 === 0 && i % 5 === 0) {
    squareElem.innerHTML = ` <h3>Lucaris</h3>`;
    squareElem.classList.add("fizzbuzz");

    // debug
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    squareElem.innerHTML = ` <h3>Loris</h3>`;
    squareElem.classList.add("fizz");

    // debug
    console.log("Fizz");
  } else if (i % 5 === 0) {
    squareElem.innerHTML = ` <h3>Luca</h3>`;
    squareElem.classList.add("buzz");

    // debug
    console.log("Buzz");
  } else {
    squareElem.innerHTML = "👩‍💻";

    // debug
    console.log(i);
  }

  row.append(squareElem);
}
