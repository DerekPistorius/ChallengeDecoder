/*need to write a decoder function
 * only one parameter called code
 * each code starts with a number and ends with a letter
 * each number tells you how many characters to skip before the next letter
 */

function decoder(code) {
    let string = ''
    const codeString = code.split("")
    for (let i = 0; i < codeString.length; i++) {
        if (!isNaN(codeString[i])) {
          const num2skip = codeString[i];
          i += num2skip

        } else {
            string += codeString[i]

        } 
    } return string
    
}


let answer = decoder ('0h2xce5ngbrdy') //should return hey
console.log(answer);

// I realized that one thing im struggling with is taking the user input and plugging it back up into the code
//further explanation on this would be very helpful