// Шта су низови?
// Низови су само специјална врста објекта

let x1 = 4
let x2 = 5
let x3 = 7

let nizBrojeva = [4,5,7,3,5,86,59,95,522,[545,655,777,888,999,110],'sdfsd'] // бројање унутар низа почињемо од 0,1,2..
console.log(typeof nizBrojeva)

console.log("Други конзол")
console.log(nizBrojeva)


// Како приступамо елементима низа?

console.log("Други конзол")
console.log(nizBrojeva[9][0])

// console.log(nizBrojeva[0])
// console.log(nizBrojeva[1])
// console.log(nizBrojeva[2])


// Како итерирамо (пролазимо) кроз низ?

console.log(nizBrojeva.length) // приказаће само један број односно колико има ствари у низу
// А како ћемо добити да нам испише све чланове низа појединачно а да не куцамо сваки понаособ као у коментару изнад, па наравно идемо у петљу где ћемо искористити после имена низа функцију .lenght , где добијемо коначан број који убацимо као користан број колико ће се петља понављати.

for(let i = 0; i < nizBrojeva.length; i++){
    console.log(i, nizBrojeva[i])
}

// Како прослеђујемо низ функцији?



// Збир бројева у низу

let nizZadatak = [2,3,5,7,9,12,14,16,17,"ne-racunati-string",18,20,21,23,25,26,27]

let zbirBrojeva = 0

for (let i = 0; i < nizZadatak.length; i++){

    if(typeof nizZadatak[i] === 'number'){
        zbirBrojeva += nizZadatak[i]
        console.log(i, nizZadatak[i], zbirBrojeva)
    }
}


// Из низа извући
{
    let niz2Brojeva = [1,2,3,4,24,25,123,566,78,23]
    let nizDeljivih = []

    nizDeljivih.push(niz2Brojeva[0]) //  push - Убацује у низ, на крај низа, али када се конзол-логује враћа онај нови број колико има чинилаца у низу као .length - тај број
    nizDeljivih.push(niz2Brojeva[1])
    nizDeljivih.push(niz2Brojeva[2])
    nizDeljivih.push(niz2Brojeva[3]) 

    nizDeljivih.unshift(niz2Brojeva[7]) // Убацује на почетак низа



    console.log(niz2Brojeva,nizDeljivih)
}

console.log("А сада испод наша направљена функција push")


    //  .push , додаје елемент на крај низа, враћа нову дужину низа

function push(arr,el){
    if(Array.isArray(arr)){ // може без овог реда основна варијанта
        arr[arr.length] = el
        return arr.length
    }                       // може без овог реда основна варијанта
    return -1 // Конвенција за грешку , // може без овог реда основна варијанта
}

    let noviNiz = [1,2,3,4]

    console.log(noviNiz)

    console.log("А сада испод додат нови елемент нашом функцијом push")



    push(noviNiz,5)

    console.log(noviNiz)


    //  .unshift , додаје елемент на почетак низа, враћа такође као и push нову дужину низа



    

    /// niz.reduce((total,curr) => total + curr, 0) Сабере све бројеве у низу и да један број као резултат, понаша се као петља, 0 на крају је у ствари почетна вредност тотала, curr представља тренутни елемент у низу који сабира са тоталом као тотал += елемент се понаша, функција за сабирање елемената у низу

let nizRed = [5,234,6,2,-23,34]

console.log(nizRed.reduce((total,curr) => total + curr, 0))

// Или мала промена кода и ето нама промене као са if

console.log(nizRed.reduce((total,curr) => curr % 2 == 0 ? total + curr : total,0))





// .forEach(el => {........}) понаша се као петља

nizRed.forEach(el => {
    console.log(el)
})

// Овај код горе и овај код доле су исти

for(let i = 0; i < nizRed.length; i++){
    console.log(nizRed[i])
}




console.log(`БРАВО ПРЕДРАЖЕ ЗА ОВО ВЕЖБАЊЕ!!!`)