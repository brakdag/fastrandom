// Ferreyra Gustavo David
// Random test.

var rand = require('./index.js')
var j=rand.random() // load init table
const MAX_STRESS = 1000000
x = []
y = []

console.time("testing fastrandom")
for(i=0;i<MAX_STRESS;i++){ 
	x.push(rand.random())
}
console.timeEnd("testing fastrandom")

console.time("testing Math.random")
for(i=0;i<MAX_STRESS;i++){ 
	y.push(Math.random())
}
console.timeEnd("testing Math.random")