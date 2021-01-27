// Assignment 4 | 25th January 2021

// Question 1
// By how many ways we can access elements in the DOM and write about them in brief?


var ele=document.getElementsByClassName("age");
console.log(ele[1].innerText);

var ele1=document.getElementById("demoId");
console.log(ele1.innerText);

var ele2=document.getElementsByTagName("demoTag");
console.log(ele2);

var ele4=document.querySelector("p.demoSelector");
console.log(ele4.innerText);

var ele5=document.querySelectorAll("p.demoSelectorAll");
console.log(ele5[0].innerText);
console.log(ele5[1].innerText);


// Question 2
// Write a javascript program that will take 2 numbers from the HTML page and display them on the
// HTML page after the addition of those 2 numbers.

function add(){
    var a,b,c;
    a=parseInt(document.getElementById("first").value);
    b=parseInt(document.getElementById("second").value);
    c= a + b;
    document.getElementById("Ans").value= c;
};