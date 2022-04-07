let data = [10,1,8,6,4,7,2,4,1,5,6,3,9,7,7,1]
function sort(arr) {
  let result = [...arr]
  let len = result.length
  let count = 0
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - 1 - i; j++){
      if (result[j] > result[j+1]){
        let temp = result[j]
        result[j] = result[j+1]
        result[j+1] = temp 
      }
      count++
      // console.log(i+'--', ...result)
    }
    // console.log(i+'--', ...result)
  }
}

function sort2 (arr) {
  let result = [...arr]
  let i = result.length-1
  let count = 0
  while(i > 0){
    let pos = 0
    for (let j = 0; j < i; j++) {
      if(result[j] > result[j+1]){
        pos = j
        let temp = result[j]
        result[j] = result[j+1]
        result[j+1] = temp
      }
      count++
    }
    i = pos
  }
  console.log(count)
}
sort2(data)
