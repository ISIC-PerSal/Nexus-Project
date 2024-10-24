function sortArray(arr, property, order = "asc") {
  return arr.sort((a, b) => {
    if (order === "asc") {
      return a[property] > b[property] ? 1 : -1;
    } else {
      return a[property] < b[property] ? 1 : -1;
    }
  });
}
