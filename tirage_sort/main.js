
// for(let i = 1; i<= 4; i++){
 
//   arrN[i - 1] = Math.floor(result/Math.pow(10, num.toString().length - i));
//   result = result - arrN[i-1]* Math.pow(10, num.toString().length - i);
//   console.log(arrN[i - 1]);

// }



let btn_click = document.querySelector('.btn_click');
let btn_tirage = document.querySelector('.btn_tirage');
const body =  document.querySelector('body');
let p_text = document.querySelector('.p_text');
let num = document.querySelector('.inp_text');
const list_nom = document.querySelector('.list_nom');


let result =[];

btn_click.addEventListener('click', () => {
  result.push()
  let elem = document.createElement('p');
  elem.innerHTML = num.value;
  list_nom.append(elem);
  result.push(num.value)
  num.value = " "

  console.log(result);
  
})


btn_tirage.addEventListener('click', () => {
  

  let winner = result[randomNum(result.length)];

  // list_nom.childNodes[randomNum(result.length)].innerHTML = winner + " -- winner!";
  list_nom.childNodes[randomNum(result.length)].classList.add('red');


  console.dir(list_nom);
  console.log(winner);
  
})

function randomNum(limit) {
 let rest =  (Math.floor(Math.random()*limit));
 console.log(rest);
 return rest;
}








