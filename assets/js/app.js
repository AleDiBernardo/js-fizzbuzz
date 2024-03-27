const row = document.querySelector(".row");

for (let i = 0; i <= 100; i++) {
  const squareElem = document.createElement("div");
  squareElem.classList = "square";

  //Console
  if (i % 3 === 0 && i % 5 === 0) {
    squareElem.innerHTML = ` <h3>BoolBuzz</h3>`;
    squareElem.classList.add("fizzbuzz");

    // debug
    console.log("FizzBuzz");

  } else if (i % 3 === 0) {
    squareElem.innerHTML = ` <h3>Bool</h3>`;
    squareElem.classList.add("fizz");


    // debug
    console.log("Fizz");
    
  } else if (i % 5 === 0) {
    squareElem.innerHTML = ` <h3>Buzz</h3>`;
    squareElem.classList.add("buzz");


    // debug
    console.log("Buzz");
  } else {
    squareElem.innerHTML = i;

    // debug
    console.log(i);
  }

  row.append(squareElem);
}
