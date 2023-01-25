// Синтакса

// дакле све ово испод функционише тотално одвојено од остатка кода

//      function biloKojeImeKojeOpisujeFunkciju(x){
//       return x
//      }

// function - резервисано име за функцију

// jeDeljivSa5 - нпр. име функције

// (x) - уносимо параметре функције - може да буде један параметар, ниједан, два, бесконачно, у овом конкретном случају параметар је x, тако да ако уместо x напишемо само број када позовемо функцију програм ће да га рачуна као први параметар - односно - x

// {тело функције је између ових заграда са све return ..после...}
// return - повратна вредност - је оно што функција враћа коду

function jeDeljivSa5(x){
    // тело функције
    return x % 5 === 0 // x % 5 === 0 добија се boolean true or false као резултат, дакле ова цела функција враћа само true ili false у односу на задати x 
}

// Зашто користимо функције - посматрати функције као посебне одвојене програме
// Читкије је
// Користимо их ако неке ствари радимо више пута


jeDeljivSa5(78) // враћа false јер 78 није дељиво са 5 али не исписује
console.log(jeDeljivSa5(78)) // isDivisibleBy5 - konvencija -- а такође исписује јер је функција сада у конзол логу а пре није постојао у телу функције

// враћа false јер 78 није дељиво са 5
// овај код доле испод односно функција са овим параметром

// jeDeljivSa5(78)

// је исто као и да пише 

// false

//////////////////////////////////////////////

function sum(a,b){
    let sum = a + b
    return sum
}

sum(5,6) // ово неће исписати док се не конзол логује, осим наравно ако у телу функције већ није унесен конзол лог

console.log(sum(5,6)) // Тек овде је конзол логован функција и онда ће се return исписати

///////////////////////////////////////////////


function sumKonzolLogBezReturn(a,b){
    let sum = a + b
    console.log(sum) //  Исписаће али ништа неће вратити јер нема return и вредност коју смо добили не може да упамти јер нема return
}

sumKonzolLogBezReturn(6,7)

////////////////////////////////////////////

function sumKonzolLogSaReturn(a,b){
    let sum = a + b
    return console.log(sum) //  Исписаће и вратиће return и вредност коју смо добили може да упамти и користи даље
}

sumKonzolLogSaReturn(5,6) 




// Задаци

// Функција која враћа --- нека вредност
// Функција која исписује --- нека вредност

function red(n){
    return '*'.repeat(n) // ***** ако ставим уместо n да је 5
}

let jedanRed = red(5)

console.log(jedanRed)

for(let i = 0; i < 5; i++){
    console.log(jedanRed)
}

////////////////////////////////////////////////
 

function ispisiRedove(brojRedova,jedanRed){
    for(let i = 0; i < brojRedova; i++){
        console.log('hello')
    }
}

ispisiRedove(5) /// Други параметар не морамо да наведемо јер га нисмо користили и исписаће 5 редова hello

///////////////////////////////////////////////////////////////////

function ispisiDrugeRedove(brojRedova,jedanRed){
    for(let i = 0; i < brojRedova; i++){
        console.log(jedanRed)
    }
}
ispisiDrugeRedove(5,red(5))



console.log("БРАВО ПРЕДРАЖЕ ЗА ОВО ВЕЖБАЊЕ")


//////////////////////////////////////////////////////////

// Написати функцију која исписује да ли је број дељив са 3


function printDivisibleBy3(x){
    
    if(x % 3 === 0){
        console.log(`Број ${x} је дељив са 3`)
    }
    else{console.log(`Број ${x} није дељив са 3`)
    }
}

printDivisibleBy3(33)



/////////////////////////////////////////////////////


function printDivisibleBy3TERNARNIOperator(x){
    
    x % 3 === 0 ? // дакле имамо прво услов, а знак питања ? је као if питамо се да ли је tru а ако јесте исписује се ово прво испод
        console.log(`Број ${x} је дељив са 3, код написан тернарним операторем`)
        : // ове две тачке ће се извршити ако је услов false
        console.log(`Број ${x} није дељив са, 3 код написан тернарним операторем`) // ovo je kao else
}

printDivisibleBy3TERNARNIOperator(15)

//////////////////////////////////////////////

// Написати функцију која проверава да ли је број дељив са 3

function isDivisibleBy3(num){
    
    return num % 3 === 0
}
        
isDivisibleBy3(30) // Ово се неће исписати јер нема конзол лога, већ само проверава

console.log(isDivisibleBy3(30)) // исписује се јер смо га ставили у конзол лог


/////////////////////////// KOMBINACIJA OVOGA DOLE I GORE

// Написати збир бројева од 1 до N

let N = 100
let zbir = 0
for(let i = 0; i < N; i++){
   if(isDivisibleBy3(i)){
    zbir += i
   }
}
console.log("Збир бројева од 0 до 100" ,zbir)

/////////////////////////// KOMBINACIJA OVOGA DOLE I GORE

// Исписати све бројеве од 1 до M

let M = 100

for(let i = 0; i < M; i++){
   if(isDivisibleBy3(i)){
    printDivisibleBy3(i)
   }
}


// Исписати све бројеве од 1 до O   --- ДРУГИ НАЧИН који исписује све је да се убаци без услова само ова друга функција која одмах принтује и има испис и за дељиве и за бројеве који нису дељиви са три

let O = 100

for(let i = 0; i < O; i++){
  printDivisibleBy3(i)
}


/// Ако се користи конзол лог у самом телу функције онда не треба конзоллоговати саму функцију јер ће дати undefined

function proveraConsoleLoga(x,y){
    console.log(x + y)
}

console.log(proveraConsoleLoga(5,6)) // Дакле, дао је прво из тела функције конзол лог и исписао 11, али после је од функције тражио return али пошто га није било онда је остало само undefined

proveraConsoleLoga(5,6) // Овде је само још једном из самог тела функције конзоллоговао 11

console.log("БРАВО ПРЕДРАЖЕ ЗА ОВО ВЕЖБАЊЕ")
