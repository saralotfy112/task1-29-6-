// 1.Create void function take an integer then print it then call this method in main.
function getNumber() {
    var number = 5;
    document.getElementById("par1").innerHTML = number
}
getNumber();

// 2.Create function take three integers then return the average as float value then callthis method in main.
function getAverage() {
    var numeber1 = 10;
    var numeber2 = 15;
    var numeber3 = 20;

    var average = (numeber1 + numeber2 + numeber3) / 3;

    document.getElementById("par2").innerHTML = average

}
getAverage();

// 3. Create function take an integer then return true if this number is prime otherwisereturn false.
function getPrime(num) {
    if (num % 2 === 0 || num % 3 === 0) {
        document.getElementById("par3").innerHTML = "ture"
    }
    else {
        document.getElementById("par3").innerHTML = "false"
    }
}
getPrime(15);

// 4.Create function take an integer then return it reversed.
// function getReverseInteger(number4) {
//     if (number4 !== 0){
//         document.getElementById("par4").innerHTML = number4.reverse();
//     }
// }
// getReverseInteger(14545);

// 5. Create function take an array then return summation of its values.
function sumAll() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}
document.getElementById("par5").innerHTML = sumAll(10, 20, 30, 40, 50);


// 6.Create function take array then return the max element in array
function getMax() {
    document.getElementById("par6").innerHTML = Math.max(10, 50);
}
getMax();

// 7.Create function take char and return true if it is vowel char (a,e,I,o,u) otherwisereturn false
function isVowel(letters) {
    if (typeof letters !== 'string' || letters.length !== 1) {
        document.getElementById("par6").innerHTML = letters.toLowerCase();
    }
}
isVowel("a,b,c,d,v,h,t");






