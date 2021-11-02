const letters = document.getElementById("letter");
const numbers = document.getElementById("numbers");

const a1 = document.getElementById("a1");
const b2 = document.getElementById("b2");
const c3 = document.getElementById("c3");
const d4 = document.getElementById("d4");
const e5 = document.getElementById("e5");
const f6 = document.getElementById("f6");
const g7 = document.getElementById("g7");
const h8 = document.getElementById("h8");
const i9 = document.getElementById("i9");
const j0 = document.getElementById("j0");
const cn = document.getElementById("cn");
const cl = document.getElementById("cl");

//let array = ['A', 'B', 'C', 'D','E', 'F', 'G', 'H','I', 'J', '1', '2','3', '4', '5', '6','7', '8', '9', '0'];
//array=a

let array = [];
let num = [];

const fnA1 = () => { 
  //metodo("A","J","1",""); 
  if (buscar("A") && buscar("J") && !buscarnum("1")) { 
    num.push("1");
    letters.innerHTML = array;
    numbers.innerHTML = num;
  }else if (!buscar("A")){
    array.push("A");
    letters.innerHTML = array;
    numbers.innerHTML = num;
  }else{
    alert("faltan letras");
  }
};
const fnB2 = () => { 
  metodo("B","1","2","A"); 
};
const fnC3 = () => {
  metodo("C","2","3","B"); 
};
const fnD4 = () => {
  metodo("D","3","4","C");
};
const fnE5 = () => {
  metodo("E","4","5","D");
};
const fnF6 = () => {
  metodo("F","5","6","E");
};
const fnG7 = () => {
  metodo("G","6","7","F");
};
const fnH8 = () => {
  metodo("H","7","8","G");
};
const fnI9 = () => {
  metodo("I","8","9","H");
};
const fnJ0 = () => {
  metodo("J","9","0","I");
};
const fnCn = () => {
  
};
const fnCl = () => { 
  letters.innerHTML = "";
  numbers.innerHTML = "";
};

a1.onclick = () => {
  fnA1();
};
b2.onclick = () => {
  fnB2();
};
c3.onclick = () => {
  fnC3();
};
d4.onclick = () => {
  fnD4();
};
e5.onclick = () => {
  fnE5();
};

f6.onclick = () => {
  fnF6();
};
g7.onclick = () => {
  fnG7();
};
h8.onclick = () => {
  fnH8();
};
i9.onclick = () => {
  fnI9();
};
j0.onclick = () => {
  fnJ0();
};
cn.onclick = () => {
  fnCn();
};
cl.onclick = () => {
  fnCl();
};

const metodo=(p1,p2,p3,p4)=>{
  if (buscar(p1) && buscarnum(p2) && !buscarnum(p3)) {
    console.log( buscar(p2));
    num.push(p3);
    letters.innerHTML = array;
    numbers.innerHTML = num;
  }else if (!buscar(p1)&& buscar(p4)){
    array.push(p1);
    letters.innerHTML = array;
    numbers.innerHTML = num;
  }else{
    alert("faltan letras");
  }
}
const buscar = (p1) => {
  console.log(array);
    for (const letra in array) {
      console.log(array[letra]+"p"+p1);
    if (array[letra]==p1) {
      return true;
    }
  }
  return false;
};
const buscarnum = (n) => {
  console.log(num);
    for (const numero in num) {
      console.log(num[numero]+"p"+n);
    if (num[numero]==n) {
      return true;
    }
  }
  return false;
};


/*
let letras = ["a","b","c","d","e","f","g","h","i","j"];
let numeros = [0,1,2,3,4,5,6,7,8,9];

let secuencia = [0,0,0,0,0,0,0,0,0,0];

const validarLetra =(l)=>{
  if(l==="a" && secuencia[0]==0){
      secuencia[0]=1;
      return true;
  }
// for recorre secuencia
  for (let i = 1; i <=9 && secuencia[i]==1; i++) {
      console.log("entro al for"+i+"sec"+secuencia[i+1]+secuencia[i-1]);
      if(l==="a" && secuencia[i]==0){
          secuencia[i]=secuencia[i]+1;
          return true;
      }
      if(letras[i]===l){
          secuencia[i]=secuencia[i]+1;
          return true;
      }
  }

return false;
}*/