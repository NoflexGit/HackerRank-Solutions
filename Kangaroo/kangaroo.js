const kangaroo = (x1, v1, x2, v2) => {
  //  Kangaroo2 is already behind and can't catchup by going slower than kangaroo1
  if (x1 < x2 && v1 < v2) return 'NO';

  // Check the difference between both start points and kangaroos' speed
  // So it's module and if it's equals to zero so kangooros will meet each other in the same position
  return (x1 - x2) % (v2 - v1) === 0 ? 'YES' : 'NO';
};