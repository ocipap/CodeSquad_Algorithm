const solution = (dirs) => {
  let arr = []
  let location = [0, 0]
  let answer = 0
  arr.push([...location])
  for (const inst of dirs) {
    switch (inst) {
      case "U":
        if (location[0] + 1 <= 5) {
          location[0] += 1
        }
        break;
      case "D":
        if (location[0] - 1 >= -5) {
          location[0] -= 1
        }
        break;
      case "R":
        if (location[1] + 1 <= 5) {
          location[1] += 1
        }
        break;
      case "L":
        if (location[1] - 1 >= -5) {
          location[1] -= 1
        }
        break;
      default:
        break;
    }
    if (JSON.stringify(arr[arr.length - 1]) !== JSON.stringify(location)) {
      answer += f(arr, location)
      arr.push([...location])
    }
  }
  return answer
}

const f = (iter, location) => {
  let start = JSON.stringify(iter[iter.length - 1])
  let res = true
  iter.forEach((el, i) => {
    if (JSON.stringify(el) == JSON.stringify(location)) {
      if (!!iter[i - 1] && JSON.stringify(iter[i - 1]) === start || !!iter[i + 1] && JSON.stringify(iter[i + 1]) === start) {
        res = false
      }
    }
  });
  return Number(res)
}