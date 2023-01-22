function getRandomInt(max) {
  return Math.floor(Math.random() * max) + 1;
}


function getLottery(loop, max) {
  let l;
  for (let i = 0; i < loop; i++)
    l = getRandomInt(max);
  
  return l;
}


// 威力彩
function powerLottery() {
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
}

// 大樂透
function bigLottery() {
  const numbers = [
    getLottery(73, 49),
    getLottery(06, 49),
    getLottery(25, 49),
    getLottery(73, 49),
    getLottery(06, 49),
    getLottery(25, 49),
  ].sort((a, b) => a - b);

  console.log(`${numbers.join()}`);
}


function help() {
  console.log('Option:\n    1: 威力彩\n    2: 大樂透');
}


if (process.argv.length < 3) {
  help();
} else {
  switch (process.argv[2]) {
    case '1':
      powerLottery();
      break;

    case '2':
      bigLottery();
      break;
  }
}
