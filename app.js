
function calcular(){
  let inputPeople = parseFloat(document.getElementById('in-people').value) ;
  const inputImport = parseFloat(document.getElementById('in-import').value);
  if(inputImport != 0 && inputPeople > 0){
    validar()
  }
    
}

function selectButton(event){
    const clickedElement = event.target;

  // Si el elemento clicado es un botón, lo seleccionamos
  if (clickedElement.classList.contains('b')) {
    const botones = document.querySelectorAll('.b');
    botones.forEach(boton => {
      boton.classList.remove('selected');
    });
    clickedElement.classList.add('selected');
  }
  calcular();
}

function validar(){
  let inputPeople = parseFloat(document.getElementById('in-people').value) ;
  const errormsg = document.getElementById('error');
  const inerror = document.getElementById('in-people');
  document.getElementById('in-import').addEventListener("input", function(){
    if(this.value < 0){
      this.value = 0;
    }
  });
  if(inputPeople < 1 || isNaN(inputPeople)){
  
    inerror.classList.add('in-error')
    errormsg.classList.remove('ocultar')
  }else{
    errormsg.classList.add('ocultar');
    inerror.classList.remove('in-error')
    tipAmount();
    totalPerson();
  }
}

function tipAmount(){
    const inputImport = parseFloat(document.getElementById('in-import').value);
    let selectedBtn = (parseFloat(document.querySelector('.selected').value));
    const inputPeople = parseInt(document.getElementById('in-people').value);
    let tipAmout = document.getElementById('tip-amount');
    const custom = document.getElementById('custom');
   
    if(custom.classList.contains('selected')){
      tipAmout.innerHTML = (selectedBtn / inputPeople).toFixed(2);
      console.log(selectedBtn);
    }else{
      tipAmout.innerHTML = (inputImport * (selectedBtn/100) / inputPeople).toFixed(2);
    }
  
}

function totalPerson(){
    const inputImport = parseFloat(document.getElementById('in-import').value);
    let selectedBtn = (parseFloat(document.querySelector('.selected').value));
    const inputPeople = parseInt(document.getElementById('in-people').value);
    let totalPerson = document.getElementById('total-person');
    const custom = document.getElementById('custom');

    if(custom.classList.contains('selected')){
      totalPerson.innerHTML = (((inputImport + selectedBtn)) / inputPeople).toFixed(2);  
    }else{
      totalPerson.innerHTML = ((inputImport + (inputImport*(selectedBtn/100))) / inputPeople).toFixed(2);
    } 
  }  

function reset() {
  const inputImport = document.getElementById('in-import');
  const inputPeople = document.getElementById('in-people');
  const botones = document.querySelectorAll('.b');
  const custom = document.getElementById('custom');
  let totalPerson = document.getElementById('total-person');
  let tipAmout = document.getElementById('tip-amount');

  inputImport.value = "";
  inputPeople.value = "";
  botones.forEach(boton => {boton.classList.remove('selected');});
  custom.value = ""
  totalPerson.innerHTML = "0.00";
  tipAmout.innerHTML = "0.00";
}