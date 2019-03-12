import React from "react";

function BestBeers() {
  let myBestBeers = []; // numbers which fulfill two conditions

  for (let num = 1; num <= 1000; num++) {
    let divisorsList = [];

    // to get all proper divisors and a list of divisors
    let divisors = num =>
      [...Array(num).keys()].slice(1).reduce((s, a) => {
        let divisor = !(num % a) && a;
        if (divisor) divisorsList.push(divisor);
        return s + divisor;
      }, 0);

    let sumAllProperDivisors = divisors(num); // sum of all proper divisors of each number

    // to check the first condition
    if (sumAllProperDivisors >= num) {
      // if the first condition is fulfilled, then check the subsets
      if (findSubsets(num, divisorsList, divisorsList.length) === false) {
        console.log("The number ", num, "matches both conditions.");
        myBestBeers.push(num, " ");
      } else {
        console.log("The number ", num, "is eliminated.");
      }
    }
  }
  return (
    <div>
      <p>{myBestBeers}</p>
    </div>
  );
}

function findSubsets(n, list, length) {
  /* This is a recursive function to check the second condition. Check if there is a subset which has a sum value is equal to a certain value(n). It returns true if a subset is found.
  n = 0 is the remaining sum value that should be reached.
  console.log("n is", n);
  console.log("length is ", length); */

  if (n === 0) {
    // There is no remaining sum value that should be reached, so the is a subset which violates the second condition.
    return true;
  }
  if (length === 0 && n !== 0) {
    //The list is already empty {}, but there is still remaining sum value that should be reached.
    return false;
  }
  //If the last element is greater than n, then ignore it
  if (list[length - 1] > n) {
    return findSubsets(n, list, length - 1);
  }
  //check if n can be obtained by including or excluding the last element
  return (
    findSubsets(n, list, length - 1) ||
    findSubsets(n - list[length - 1], list, length - 1)
  );
}

export default BestBeers;
