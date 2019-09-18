// var a = 2;
// var b = 5;
// var result = (a - b);
// console.log(result);
// var name = "naga mahesh";
// console.log(name.charAt(6));
// var name = "hamenth";
// console.log(name.charCodeAt(6));
// var demo = "hai hello how are you";
// var result = demo.indexOf("how");
// function changeContent() {
//     document.getElementById("demo").innerHTML = "replace In his review for CNN-IBN Vaihayasi Pande Daniel of gave";
//     document.getElementById("demo").style.display = "none";
//     document.getElementById("demo").setAttribute("style", "background-color:yellow;color:red;font-size:20px;");
// }
// function styleContent() {
//     document.getElementById("demo").setAttribute("style", "background-color:yellow;color:red;font-size:20px;");
// }
// function hideContent(){
//     document.getElementById("demo").style.display="none";
// }
// function additionContent() {
//     var a = 1;
//     var b = 2;
//     var c = 3;
//     var result = (a + b + c);
//     console.log(result);

// }
// function subContent() {
//     var a = 1;
//     var b = 2;
//     var c = 3;
//     var result = (a - b - c);
//     console.log(result);
// }

// function multipicationContent() {
//     var a = 1;
//     var b = 2;
//     var c = 3;
//     var result = (a * b * c);
//     console.log(result);
// }
// var a = 10;
// var b = 5;
// var c = 6;
// var d = 8;
// if (a > b) {
//     console.log("this is true");

// }


// if (a < b) {
//     console.log("this is false");
// }
// if else{
//     consol.log("this is false");
// }
// for (i = 0; i < 20; i++) {
//     if ((i % 2) == 0) {
//         console.log("this is even number" + " " +i);
//     }
//     else if ((i / 2) !=0) {
//         console.log("this is odd" + " "+i);
//     }
// }
// for (i = 1; i <= 100; i++) {
//     console.log(i);
// }
// for (i = 1; i <= 100; i++) {
//     if ((i % 2) == 1) {
//         console.log("even numbers", ++i);
//     }
// }
// for (i = 301; i <= 400; i++) {
//     if ((i % 2) == 301) {
//         console.log("odd numbers", ++i);
//     }
//     else if ((i / 1) != 301) {
//         console.log("this is odd number", ++i);
//     }
// }
for (var counter = 2; counter <= 100; counter++) {
    var notprime = false;
    for (var i = 2; i <= counter; i++) {
        if (counter % i === 0 && i !== counter) {
            notprime = true;
        }
    }
    if (notprime === false) {
        console.log(counter);
    }
}
for (var limit = 2; limit <= 100; limit++) {
    var a = false;
    for (var i = 2; i <= limit; i++) {
        if (limit % i === 0 && i !== limit) {
            a = true;
        }
    }

    if (a === false) {
        console.log(limit);
    }

}

























