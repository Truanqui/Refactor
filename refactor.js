function processNumberByRandom(num, process) {
  const randNum = Math.round(Math.random() * 100);
  const processes = {
    sum: `Seu número é ${randNum + num}!`,
    subtract: `Seu número é ${randNum - num}!`,
    divide: `Seu número é ${randNum / num}!`,
    multiply: `Seu número é ${randNum * num}!`,
  };
  if (!Object.keys(processes).includes(process)) {
    return processes.sum;
  }
  return processes[process];
}

console.log(processNumberByRandom(12, "wefbwe"));