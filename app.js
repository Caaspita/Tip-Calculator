

function calcular(){
    
    tipAmount()
    totalPerson()
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

function tipAmount(){
    const inputImport = parseInt(document.getElementById('in-import').value);
    let selectedBtn = (parseInt(document.querySelector('.selected').value)/100);
    const inputPeople = parseInt(document.getElementById('in-people').value);
    let tipAmout = document.getElementById('tip-amount');
   
    tipAmout.innerHTML = (inputImport * selectedBtn / inputPeople).toFixed(2);

}

function totalPerson(){
    const inputImport = parseInt(document.getElementById('in-import').value);
    let selectedBtn = (parseInt(document.querySelector('.selected').value)/100);
    const inputPeople = parseInt(document.getElementById('in-people').value);
    let totalPerson = document.getElementById('total-person');

    totalPerson.innerHTML = ((inputImport + (inputImport*selectedBtn)) / inputPeople).toFixed(2);
}    