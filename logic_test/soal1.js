function reverse(text) {
  const filterNumber = text.match(/[0-9]\w*/g)
  const filterAlfabet = text.match(/[A-Za-z]/g).reverse()
  
  const arr = filterAlfabet.concat(filterNumber)
  return arr.reduce((total,value)=>total+value)

}

console.log(reverse("NEGIE1"))
