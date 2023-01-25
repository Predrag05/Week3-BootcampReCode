// Први задатак

// Написати програм да враћа и исписује увек највећи број од задате три вредност

function jeNajveciBroj(a, b, c){

    if(a > b && a > c){
        console.log(`Макси број је ${a}`)
        return a // када не би враћао само број може и овако `Макси број је ${a}`
    }
    if(b > a && b > c){
        console.log(`Макси број је ${b}`)
        return b // када не би враћао само број може и овако `Макси број је ${b}`
    }
    if(c > a && c > b){
        console.log(`Макси број је ${c}`)
        return c // када не би враћао само број може и овако `Макси број је ${c}`
    }
}
jeNajveciBroj(23,7,33) // није конзолован ретурн и неће га исписати

console.log(jeNajveciBroj(23,7,33)) // Исписаће све и плус return који враћа број

//////////////////////////////////// Ово је нешто у коментару што је прекопирано од раније - о Боже колико сам компликовао.
// function maksiBroj(a,b,c){
    
//     if((a > b && a > c) && (a => b && a > c)) {
//         console.log(`Maksi broj je ${a}`)
//     }
//     if((b > a && b > c) && (b => a && b > c)) {
//         console.log`Maksi broj je ${b}`
//     }
//     if((c > b && c > a) && (c => b && c > a)) {
//         console.log(`Maksi broj je ${c}`)
//     }
    
//     return
// }
// console.log(maksiBroj(5,4,8))



// Други задатак

/// Написати програм да на задату величину полупречника и цене пице враћа цену пице по центиметру квадратном



function cenaCm(r,cenapice){
    let Obim = r * r * Math.PI
    return `${cenapice / Obim} din/cm2`
}
console.log(cenaCm(14,680))
