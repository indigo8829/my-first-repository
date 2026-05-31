const response = await fetch ('https://6a146e546c7db8aac0548448.mockapi.io/api/movies')
console.log(response)

console.log('=======================')

const result = await response.json()
console.log(result)

