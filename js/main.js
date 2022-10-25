'use strict';
const inputSearchDesc = document.querySelector('.js_in_search_desc');
const inputSearchRace = document.querySelector('.js_in_search_race');
const btnSearch = document.querySelector(".js-btn_search");
const labelMesageError2 = document.querySelector('.js-label-error2');
const icon = document.querySelector('.js-icon-plus');

// input_search_desc.value = 'cariñoso';
// const descrSearchText = input_search_desc.value;

const list = document.querySelector(".js-list");
const btnAdd = document.querySelector(".js-btn-add");

const inputDesc = document.querySelector('.js-input-desc');
const inputPhoto = document.querySelector('.js-input-photo');
const inputName = document.querySelector('.js-input-name');
const labelMesageError = document.querySelector('.js-label-error');

btnSearch.addEventListener('click', (event) =>{
  event.preventDefault();
  const valueSearchDesc = inputSearchDesc.value;
  const valueSearchRace = inputSearchRace.value;
  if (valueSearchDesc === '' || valueSearchRace === '') {
    labelMesageError2.innerHTML="Debe rellenar todos los valores"
  } else {
  }
});

function showNewCatForm() {
  form.classList.remove('collapsed');
}
function hideNewCatForm() {
  form.classList.add('collapsed');
}

//IF PERO SIN LLAMAR A LAS FUNCIONES
icon.addEventListener("click", (event) =>{
  if (form.classList.contains('collapsed')) {
    form.classList.remove('collapsed');
    } else {
    form.classList.add("collapsed");
    }
});

const kittenOneImage = 'https://ychef.files.bbci.co.uk/976x549/p07ryyyj.jpg';
const kittenOneName = 'Anastacio';
const kittenOneDesc = 'Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!';
const kittenOneRace = 'British Shorthair';
const openForm = document.querySelector('.js-openform')

const form = document.querySelector('.js-new-form');
openForm.addEventListener('click', (event) =>{
event.preventDefault();
  if (form.classList.contains('collapsed')) {
   form.classList.remove('collapsed');
  } else {
  form.classList.add("collapsed");
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

if( kittenOneDesc.includes(descrSearchText) ) {
  kittenOneDesc.classList.remove("collapsed");
}

const kittenTwoImage = 'https://images.emedicinehealth.com/images/article/main_image/cat-scratch-disease.jpg';
const kittenTwoName = 'Fiona';
const kittenTwoDesc = 'Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!';
const kittenTwoRace = 'British Shorthair';

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

if( kittenTwoDesc.includes(descrSearchText) ) {
  kittenTwoDesc.classList.remove("collapsed");
}

const kittenThreeImage = 'https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/newscms/2019_39/3021711/190923-cat-pet-stock-cs-1052a.jpg';
const kittenThreeName = 'Cielo';
const kittenThreeDesc =
 'Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!';
const kittenThreeRace = 'British Shorthair';

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

if( kittenThreeDesc.includes(descrSearchText) ) {
  kittenThreeDesc.classList.remove("collapsed");
}

list.innerHTML = kittenOne + kittenTwo + kittenThree;