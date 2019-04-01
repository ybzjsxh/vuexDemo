export function getCloseNum(data) {
  let closeNum = 0;
  let awakeNum = 0;
  for (let i of data) {
    i.close === 'true' ?
      closeNum += 1 :
      awakeNum += 1
  }
  return {
    closeNum,
    awakeNum
  }
}
