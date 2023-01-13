function getRandomInt(max) {
  return Math.floor(Math.random() * max) + 1;
}

function getLottery(loop, max) {
  let l;
  for (let i = 0; i < loop; i++)
    l = getRandomInt(max);
  
  return l;
}

// 第一區
const first = [
  getLottery(73, 38),
  getLottery(06, 38),
  getLottery(25, 38),
  getLottery(73, 38),
  getLottery(06, 38),
  getLottery(25, 38),
].sort((a, b) => a - b);

const second = getLottery(1984, 8);

console.log(`${first.join()}\n${second}`);
