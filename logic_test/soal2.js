function findLongText(sentence) {
  const text = sentence.split(" ")
  let currentMax=0
  let longestText
  text.forEach(element => {
    if(element.length>currentMax){
      longestText=element
      currentMax=element.length
    }
  });

  return longestText
}

console.log(findLongText("Saya sangat senang mengerjakan soal algoritma"))
