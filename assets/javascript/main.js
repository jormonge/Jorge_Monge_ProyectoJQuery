
/*========================Img Slider ================*/

var images = [
    "http://www.sololearn.com/uploads/slider/1.jpg", 
    "http://www.sololearn.com/uploads/slider/2.jpg", 
    "http://www.sololearn.com/uploads/slider/3.jpg"
    ];
var num = 0;
  
function next() {
    var slider = document.getElementById("slider");
    num++;
    if(num >= images.length) {
      num = 0;
    }
    slider.src = images[num];
    }
  
function prev() {
    var slider = document.getElementById("slider");
    num--;
    if(num < 0) {
      num = images.length-1;
    }
    slider.src = images[num];
  } ;


  /*========================Img Slider ================*/


    /*==========================================
      ============================================ 
        Iterator Example Section 
      ==================================*/
  
  
    const dragons = [
    "cool dragon",
    "angry dragon",
    "nasty dragon",
  ]
  for ( let dragon of dragons) {
    dragon
  };

//   const randonNumber =
//   require("random-number") ; // npm module  = generate a (pseudo-)random number  --- # yes, this is just Math.random(), but it has some options




// function randonItem(array) {
//   const randomIndex = randonNumber ({  // this are the option for the nmp module
//     min: 0,  
//     max: array.length -1,
//     integer: true //do you want whole numbers to be returned, or not. defaults to false
//   })
//   return array[randomIndex]   // ok so no we only have to create an array to randomly select one of its values
// }

const randonNumber = Math.random();


function randonItem(array) {
  let min = 0;  
  let max = array.length -1;
  const randomIndex = Math.floor(randonNumber * (max - min + 1)) ;  
  return array[randomIndex];
  

   // ok so no we only have to create an array to randomly select one of its values
}
    
let zTest = randonItem(["cosa", "mas", "grande"]);
let xcv = zTest.length

xcv
zTest
                            

const makeDragon = () => {
  const dragonSizes = ["big","medium","tiny"]
  const dragonAbilities = ["fire", "ice", "lightning"]
  return randonItem(dragonSizes) + " " + randonItem(dragonAbilities) + " " + "dragon"
} 
// let dragonTest  = makeDragon();
// dragonTest
  
/* for below action the next: () is creating the object with as many make dragon as possible */

const dragonArmy = {
  [Symbol.iterator] : () => {  // this is like an iterator factory  - Symbol.iterator is a property
    return {  // and then there is this current function, which returns an object
      next: () => {  // this generated object contains a single property "next:""  The next() method returns an object with two properties done and value. 
        const enoughDragonsSpawned = Math.random() > 0.75; // this is a comparison -- is enoughDragonsSpawned higher than 0.75 ?
        if ( !enoughDragonsSpawned)  // meaning if false to the question above
          return { 
            value: makeDragon(),
            done: false
          } 
        return { done: true} // this is an object destructuring for when enoughDragonsSpawned is less than 0.75,, so it will get value: undefined and done: true  - this done true is what ends the for of loop below
      }
    }
  }
}


let printdragonList = () => {
  let dragonlist = [];
    for (let dragon of dragonArmy){
      dragonlist.push(dragon);  
    } return document.getElementById("hereDragons").innerHTML = JSON.stringify(dragonlist) ;     
};

/* 
===========================
Second Vide Excercise make dragons with generators  
===========================
*/

const dragonArmy2 = {
  [Symbol.iterator] :  function* () {
    while(true) {  // the generator loops  -- this stament is very typical of Iterators
      const enoughDragonsSpawned = Math.random() > 0.75
      if (enoughDragonsSpawned) return // if we are done
      yield makeDragon()  // but if we are not done
    }
  }
} ;

let printdragonList2 = () => {
  let dragonlist2 = [];
    for (let dragon of dragonArmy2){
      dragonlist2.push(dragon);  
    }     console.log(dragonlist2)    
    //return document.getElementById("hereDragons2").innerHTML = JSON.stringify(dragonlist2) ; 
}


printdragonList2()
        
console.log([...dragonArmy2]);
// esto de aca por ser un rest parameters basicamente le mete todos los valores del iteraror sin necesidad de correr un for (of)  


/* 
===========================
Actual Sections for Iterators and Generators
===========================
*/
  
/* 
===========================
      JavaScript ES6 Modules
===========================
*/

class User {
  constructor(name, age){
    this.name = name
    this.age = age
  }
}

function printName(user){
  console.log(`User's name is ${user.name}`)
};

function printAge(user){
  console.log(`User is ${user.age} years old `)
};

let newUser = new User("Jorge",29)

newUser

printName(newUser)
printAge(newUser)

let myarray = [4, 5, 1, 8, 2, 0].filter(function (x) {
  return x > 3;
  })[0];
console.log(myarray)

let myarray2 = [4, 5, 1, 8, 2, 0].findIndex(x => x >3)

  console.log(myarray2)

  console.log(Array(4 + 1).join("foo")); 

  /* 
  ========================
  Hidden Nav Function
  ========================
  */
  function releaseNav(){
    let myhiddenNav = document.getElementById("navIcon");
    if ( myhiddenNav.style.display == "none" ){
      myhiddenNav.style.display = "block"
    } else {
      myhiddenNav.style.display = "none"
    }
  };
 
  /* 
  ========================
  Stuck Header Function
  ========================
  */
  $(document).ready(function(){
    var altura = $('.menu').offset().top;
    
    $(window).on('scroll', function(){
      if ( $(window).scrollTop() > altura ){
        $('.menu').addClass('menu-fixed');
      } else {
        $('.menu').removeClass('menu-fixed');
      }
    });
  });