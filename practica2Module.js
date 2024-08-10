const add = (a, b) => { return a + b }
const substract = (a, b) => { return a - b }
const multiply = (a, b) => { return a * b }
const divide = (a, b) => {
  if (b !== 0) {
    return a / b
  }
  return 'No se puede dividir por 0'
}

module.exports = {
  add,
  substract,
  multiply,
  divide
}