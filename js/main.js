'use strict';

// 1- QUERYSELECTOR

const icon = document.querySelector('.js-icon-plus');

//Form - ¿Agregamos un nuevo gatito a Adalab?
const form = document.querySelector('.js-new-form');
const inputPhoto = document.querySelector('.js-input-photo');
const inputName = document.querySelector('.js-input-name');
const inputDesc = document.querySelector('.js-input-desc');
const labelMesageError = document.querySelector('.js-label-error');
const btnAdd = document.querySelector(".js-btn-add");

//Form - Filtrar/Buscar
const inputSearchDesc = document.querySelector('.js_input_search_desc');
const inputSearchRace = document.querySelector('.js_input_search_race');
const btnSearch = document.querySelector(".js-btn_search");
const labelMesageError2 = document.querySelector('.js-label-error2');

//Ul - Lista gatos
const list = document.querySelector(".js-list");


// 2 - VARIABLES

const kittenOneImage = 'https://ychef.files.bbci.co.uk/976x549/p07ryyyj.jpg';
const kittenOneName = 'Anastacio';
const kittenOneDesc = 'Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!';
const kittenOneRace = 'British Shorthair';

const kittenTwoImage = 'https://images.emedicinehealth.com/images/article/main_image/cat-scratch-disease.jpg';
const kittenTwoName = 'Fiona';
const kittenTwoDesc = 'Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!';
const kittenTwoRace = 'British Shorthair';

const kittenThreeImage = 'https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/newscms/2019_39/3021711/190923-cat-pet-stock-cs-1052a.jpg';
const kittenThreeName = 'Cielo';
const kittenThreeDesc = 'Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!';
const kittenThreeRace = 'British Shorthair';

// "Llamadas" a las variables
const kittenOne = `<li class="card">
<article>
  <img
    class="card_img"
    src="${kittenOneImage}"
    alt="gatito"
  />
  <h3 class="card_title">${kittenOneName}</h3>
  <h4 class="card_race">${kittenOneRace}</h4>
  <p class="card_description">
    ${kittenOneDesc}
  </p>
</article>
</li>`;

const kittenTwo = `<li class="card">
<img
  class="card_img"
  src="${kittenTwoImage}"
  alt="gatito"
/>
<h3 class="card_title">${kittenTwoName}</h3>
<h4 class="card_race">${kittenTwoRace}</h4>
<p class="card_description">
  ${kittenTwoDesc}
</p>
</li>`;

const kittenThree = `<li class="card">
<img
  class="card_img"
  src="${kittenThreeImage}"
  alt="gatito"
/>
<h3 class="card_title">${kittenThreeName}</h3>
<h4 class="card_race">${kittenThreeRace}</h4>
<p class="card_description">${kittenThreeDesc}
</p>
</li>`;

list.innerHTML = kittenOne + kittenTwo + kittenThree;


// 3 - FUNCIONES

// Mostrar/Esconder NewCat
function showNewCatForm() {
  form.classList.remove('collapsed');
}
function hideNewCatForm() {
  form.classList.add('collapsed');
}

function renderKitten(url, desc, name, race) {
  return `<li class="card">
  <article>
    <img
      class="card_img"
      src="${kittenImage}"
      alt="gatito"
    />
    <h3 class="card_title">${kittenName}</h3>
    <h4 class="card_race">${kittenRace}</h4>
    <p class="card_description">${kittenDesc}</p>
  </article>
  </li>`;
}



// 4 - ADDEVENTLISTENER

icon.addEventListener("click", (event) =>{
   if (form.classList.contains('collapsed')) {
    showNewCatForm();   //  form.classList.remove('collapsed');
    } else {
    hideNewCatForm();
    }
});

btnAdd.addEventListener('click', (event) =>{
  event.preventDefault();
  const valueDesc = inputDesc.value;
  const valuePhoto = inputPhoto.value;
  const valueName = inputName.value;
  if (valueDesc === '' || valuePhoto === '' || valueName === '') {
    labelMesageError.innerHTML="Debe rellenar todos los valores"
  } else {
  }
});

btnSearch.addEventListener('click', (event) =>{
  event.preventDefault();
  const valueSearchDesc = inputSearchDesc.value;
  const valueSearchRace = inputSearchRace.value;
  if (valueSearchDesc === '' || valueSearchRace === '') {
    labelMesageError2.innerHTML="Debe rellenar todos los valores"
  } else {
  }
});

// input_search_desc.value = 'cariñoso'; //Esto sigue dando Error y no sé si va aquí
// const descrSearchText = input_search_desc.value;

// // If kittenOne
// if( kittenOneDesc.includes(descrSearchText) ) {
//   kittenOneDesc.classList.remove("collapsed");
// }

// // IfkittenTwo
// if( kittenTwoDesc.includes(descrSearchText) ) {
//   kittenTwoDesc.classList.remove("collapsed");
// }

// // If kittenThree
// if( kittenThreeDesc.includes(descrSearchText) ) {
//   kittenThreeDesc.classList.remove("collapsed");
// }