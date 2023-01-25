// function saberi(a,b){
//     console.log(a,b)
//     return a + b
// }
// Ово су две исте функције, а ово доле се назива анонимна функција, или arroy функција

// const saberi = (a,b) => {
//     return a + b
// }

// или овако још краће

const saberi = (a,b) => a + b // Што краће то боље, битно је да је један израз као return односно после овог знака =>

console.log(saberi(3,6))

const max = (a,b) => a > b ? a : b // Ако је а веће од бе онда врати а, а ако није тачно да је а веће од бе онда врати бе

//  Ово испод није читко али ради
const maxOdTri = (x,y,z) => (x >= y && x >= z) ? x : (y >= z) ? y : z


console.log(maxOdTri(14, 15, 12))