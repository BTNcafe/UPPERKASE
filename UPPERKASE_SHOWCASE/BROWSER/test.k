sum = 10
A = [7,3,4]

// will log 14
for x of A
  sum += x
console.log sum     

// will log 3
for x, i of A
  sum += i
console.log sum