// code your solution here
function superbowlWin(array) {
  const element = array.find((element) => {
    return element["result"] === "W";
  });
  return element ? element["year"] : undefined;
}
