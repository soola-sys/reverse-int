module.exports = function reverse (n) {
 if(n < 1){
   n = n  * (-1)
 }
 let res = n.toString()
 return res.split('').reverse().join('') * 1
}

