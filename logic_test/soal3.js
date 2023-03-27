function find(input, query) {
  const result = {}

  for (let index = 0; index < query.length; index++) {
    const queryText = query[index]  //text in index query

    result[queryText] = 0  //set to object query text white default value 0

    for (let i = 0; i < input.length; i++) {  // now loop input 

      if (queryText === input[i]) { 
        result[queryText]++ //if find match sum value object query text
      }
    }
  }

  return result
}

const input = ["xc", "dz", "bbb", "dz"]
const query = ["bbb", "ac", "dz"]

console.log(find(input, query))