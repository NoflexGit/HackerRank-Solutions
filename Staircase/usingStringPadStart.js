const staircase = num => {
  if (num < 0 || num > 100 || typeof num !== "number") {
    return;
  }

  let string = "";

  for (let i = 0; i < num; i++) {
    string += "#";

    // String.prototype.padStart is experimental feature
    // It works great for this solution but it's not supported by IE
    console.log(string.padStart(num, " "));
  }
};
