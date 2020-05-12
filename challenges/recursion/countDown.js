// Recursive Version
function countDown(num) {
  if (num <= 0) {
    console.log('All done!');
    return;
  }
  console.log(num);
  num -= 1;
  countDown(num);
}
countDown(3);
