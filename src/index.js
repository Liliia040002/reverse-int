module.exports = function reverse (n) {
   

    let newStr = n.toString();
    let reverse = newStr.split('').reverse().join(''); 

   

    if (reverse[reverse.length-1] === '-' ) {

        return reverse.slice(0, reverse.length-1);

    } else if (reverse[0] === '0') {
        reverse = reverse.substr(1);
    };
  
        return reverse;

};




console.log(reverse(2563));
console.log(reverse(123));
console.log(reverse(-123));
console.log(reverse(-192));
console.log(reverse(170));


