/* My approach to check second condition with iteration and combination theory
function checkSecondCondition(mylist, num) {

  console.log(list);
  let isSecondCondition = true;
  let checkIsNeeded = true;
  let result = [];

  result.push([]);

  for (var i = 0; i < 1 << list.length; i++) {
    var subset = [];
    let total = 0;
    if (checkIsNeeded === false) {
      break;
    }

    for (var j = 0; j < list.length; j++)
      if (i & (1 << j)) {
        subset.push(list[j]);
        total += list[j];
        if (total === num) {
          console.log("Keluar");
          isSecondCondition = false;
          checkIsNeeded = false;
          break;
        }
        if (total > num) {
          checkIsNeeded = false;
          break;
        }
      }

    result.push(subset);
  }
  return isSecondCondition;
}  */
