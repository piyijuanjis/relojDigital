function actual() {
  fecha=new Date(); //Actualizar fecha.
  hora=fecha.getHours(); //hora actual
  minuto=fecha.getMinutes(); //minuto actual
  segundo=fecha.getSeconds(); //segundo actual
    if (hora<10) { //dos cifras para la hora
        hora="0"+hora;
        }
    if (minuto<10) { //dos cifras para el minuto
        minuto="0"+minuto;
        }
    if (segundo<10) { //dos cifras para el segundo
        segundo="0"+segundo;
        }
  //devolver los datos:
    mireloj = hora+" : "+minuto+" : "+segundo;	
  return mireloj; 
  }

  function actualizar() { //función del temporizador
    mihora=actual(); //recoger hora actual
    mireloj=document.getElementById("hora"); //buscar elemento reloj
    mireloj.innerHTML=mihora; //incluir hora en elemento
    }
  setInterval(actualizar,1000); //iniciar temporizador

  var today = new Date();
  var options = { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' };
  var formatter = new Intl.DateTimeFormat('es-ES', options);
  var currentDate = formatter.format(today);
  document.getElementById("current-date").innerHTML = currentDate;


  var btn1 = document.getElementById("dia");
  var btn2 = document.getElementById("noche");
  var btn3 = document.getElementById("chill");
  var currentStyle = document.getElementById("style");
  btn1.addEventListener("click", function() {
    currentStyle.setAttribute("href", "noche.css");
  });
  btn2.addEventListener("click", function() {
    currentStyle.setAttribute("href", "dia.css");
  });
  btn3.addEventListener("click", function() {
    currentStyle.setAttribute("href", "chill.css");
  });



const openModal = document.querySelector('.alarma2btn');

const modal = document.querySelector('.contact_form');
/*creado nuevo en EV*/
const modal1 = document.querySelector('.contact_form1');

const closeModal = document.querySelector('.volverbtn');

openModal.addEventListener('click', (e) => {
    e.preventDefault();
    modal.classList.add('contact_form--show');
    /*creado nuevo en EV*/
    modal1.classList.add('contact_form1--hide');
    
});


closeModal.addEventListener('click', (e) => {
    e.preventDefault();
    modal.classList.remove('contact_form--show');
    /*creado nuevo en EV*/
    modal1.classList.remove('contact_form1--hide');

});

