//Lesson 1

console.log ("dkjvd");
var name = "Nataliya Maksymenko";
name;
var age = 26;
age;
var str = "My name is \"Nataliya\". I'm 26." ;
str;
var template = 'I am ${age}';
template;
var age = 26;
var template = 'I am ${age}';
template;
var template = `I am ${age}`;
template;
var logic = true;
var logic = false;
var nothing = null;
nothing;
var name = `My name is Nata.`;
name;
var number = 88;
number;
var object = false;
object;
var text = `My name is ${name}, I am ${age} years old, and my answer is ${object}`;
text;
var person = {};
var person = {
    name: "Natali",
    age: 26
};
person;
person.surname = "Maksymenko";
person;
person["year"] = 1991;
"name" in object;
"name" in person;
"tot" in person;
var arr = [1,2,3,4,5];
arr;




//Lesson 2

var obj = {
    inside: {
        name:"foo"
    }
};
var name = obj.name;  //"foo"
name = 9;

var int = obj.inside;
int.age = 90;
console.log(int);
console.log(obj);


var first = 90;
var second = 11;

console.log(first%second*3); //6

var t = 90;
t++;
console.log(t);

var t = 0;
var number = ++t; //1

var t = 0;
var elsenumber = t++; //0


"A" > "a"; //false

"aA" < "ab"; //true

90 == "90"; //true
90=== "90"; //false

null==0; //false
null >=0; //true
null>0; //false

var result = "t" *7;
result != NaN; //true

var obj = {age:90};
var objElse = {age:90};
obj === objElse //false
obj.age === objElse.age; //true
var obj1 = objElse
obj1 === objElse; //true

// prompt ("Enter value");
//var r = prompt ("Enterter value"); // "6"
//console.log(+r); //6
//isNaN(r) //false

var t = +prompt ("Enter value");
console.log(t%2==0);



//Lesson 3

count = prompt ("Enter number");
do {
    prompt ("Enter number");
    count = prompt ("Enter number");
    count = count +1;
} while (count >5 && count<5);


var statement = 90;
statement ==90 ? console.log ("true") : console.log("false");

prompt ("Enter age");


var t = prompt ("enter age");
console.log(t);

alert((18<age && 70>age) ? alert ("Welcome") : alert("Not allowed"));

if (age>18&&age<70) {

else
    if (age == 50)
        }
 else {
        alert ("Welcome"
    })
};

var age = 89;
while (age<=90) {
    console.log(age);
    age++;
};

var arr = [];
var i = 0;
while(arr.length <=99) {
   arr[i] = i;
   i++;
}

do {
    console.log(count);
    count +=2;

}
while (count <10 && count % 2 ==0 && count !==0)


var arr = [1,2,3,4];
for (var t in arr){
    console.log (t, arr[t]);

    
 // Lesson 4

var str = "My age: 35, I love dogs, my name is Lily";
var u = str.indexOf("age:");
var g = str.indexOf (",", u);
var t = str.slice(1,6);
var i = str.replace ();



var s = prompt ("Enter name last_name");
var u = s.split(" ");
alert ("Hello " + u[1] + "you have a cool name " + u[0]);


var str = prompt ("Enter your name");
var t = str.indexOf('L');
console.log(t);



function tt (tt1, tt2) {
return tt1*tt2;
}
console.log (tt (4,5));

var tt = tt(4,5);


var foo = 90;
function name () {
    console.log (foo); //90
    function name2() {
        console.lof(foo); //90
    }
    var to = "Name";
    wndow.as=0; // outside the function
}
name();
console.log(to); //undefined


var name = function() {
    console.log(foo);

    function name2() {
        console.lof(foo);
    }
}

arr[2];
var tyt = [];
tyt [0] = 9;
tyt [0];
tyt [100] = 6;
tyt;
var t = [1,2,3];
delete t[1];
t;
delete person.age;
person.age;
age in person
   
    
    
    // Lesson 5

// Task 1
function createUser() {
    this.name = prompt ("Enter your name");
}

var userList = [];
for (var i=0; i<3; i++) {
    var obj = {};
    obj.createUser = createUser;
    obj.createUser();
    userList.push(obj);
}
console.log (userList);

// Task2

function double(number) {
    return number *2;
}
function doubleTriple(number) {
    var count = 0;

    return function (number) {
        count++;
        return function () {

        }
    }
}
var doActionDoubleTriple = doubleTriple();
doActionDoubleTriple(9); //5*2*3 / counter ==1

// Task 3

function isOdd (number, success, fail) {
    if (number %2 !==0) {
    if (typeof success === "function") {
        success();
    }
    } else {
        fail();
    }
}

isOdd (8, function() {
    alert("true");
}, function() {
    alert("false")
})
    
    
    // DOM
    //Task 1
    
for (var i=0;i<document.children.length; i++) {
    console.log(document.children[i]);
    
    //Task 2
    for (var i=0; i<document.body.children.length; i++) {
    console.log(document.body.children[i]);

if (document.body.children[i].nodeType ===8) 
alert ("is comment")
}
    

    
    
    //Lesson 6

/*console.log (document.getElementById("result")); //id
console.log (document.getElementsByClassName("name")); //class
console.log (document.querySelector("div"));
console.log (document.querySelector("#name")); //id
console.log (document.querySelector(".name")); //class


var t = prompt ("Enter your name");

var elh1 = document.createElement ("h1");
document.body.innerHTML = elh1;
document.body.appendChild(elh1);

document.body.innerHTML = "Hello" + prompt ("Enter your name");

document.querySelector("div:nth-child(2)").remove ();
document.body.remove ();

document.body.removeChild(document.querySelector("div"));

var h1Clone = document.querySelector("h1").cloneNode(true);
document.body.appendChild(h1Clone);


document.body.insertBefore (g, document.querySelector("h1"));*/



/*var t = +prompt ("How many elements?..");
var g = document.createElement("div");
for (var i=0; i<=t; i++) {
    var h1Clone = g.cloneNode(true);
    document.body.appendChild( h1Clone);
}



document.querySelector("h1").setAttribute("h1", "fjev");*/



/*document.querySelector("button").addEventListener( "click", function (){
 console.log ("Welcome!") ;
 var t = prompt ("Enter your name");
 var g = t + ", nice to meet you";
 console.log (g);
});*/

    
    //Lesson 7
var fir = document.getElementById("clickFirst");
var sec = document.getElementById("clickSecond");
function clickOnSecondButton () {
    console.log ('Button clicked');
}
fir.addEventListener ('click', function () {
    sec.removeEventListener ("click", clickOnSecondButton)
});
sec.addEventListener ('click', clickOnSecondButton);


var h2 = document.getElementById("h2");
h2.addEventListener ("click", function () {
    console.log(this.innerTtext = "new button");
})

var clickFirst = document.getElementById("clickFirst");
var text = document.getElementById("text");
text.addEventListener("keypress", function (event) {
    if (isNaN(event.key)) {
        event.preventDefault();
    }
})

var button = document.querySelector("button");
var input1 = document.getElementById("1");
var input2 = document.getElementById("2")
var option1 = document.getElementById("11")
var option2 = document.getElementById("22")
button.addEventListener ("click", function (){

    if (input1.value != "" && input2.value !="" && )
        })
