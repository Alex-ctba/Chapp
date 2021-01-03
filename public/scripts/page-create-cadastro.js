const map = L.map("mapid").setView([-25.436289, -49.2760351], 13);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);


//criação do icone
const icon = L.icon({
  iconUrl: "https://img.icons8.com/color/48/000000/job--v1.png",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
});

//create popup overlay
const popup = L.popup({
  closeButton: false,
  className: "map-popup",
  minWidth: 240,
  minHeight: 240,
});

let marker;
map.on("click", (event) => {
  const lat = event.latlng.lat;
  const lng = event.latlng.lng;

  document.querySelector("[name=lat]").value = lat; // não foi possivel fazer somente selecionando a name ('latitude')
  document.querySelector("[name=lng]").value = lng;
  //remove icon
  if (marker) {
    map.removeLayer(marker); //este IF pode ser executado tbm como: marker && map.removeLayer(marker)
  }

  //add icon layer
  marker = L.marker([lat, lng], { icon }).addTo(map);


});

//Add o campo de fotos

function addPhotoField() {
  //pegar o container de imagens

  const container = document.querySelector("#images");

  //pegar o container para duplicar
  const fieldContainer = document.querySelectorAll(".new-upload");

  //relalizar o clone da imagem
  const NewFieldContainer = fieldContainer[fieldContainer.length - 1].cloneNode(
    true
  );
  //verifica se o campo esta vazio
  const input = NewFieldContainer.children[0];
  if (input.value == "") {
    return;
  }
  //limpar o campo
  input.value = "";
  //adiciona as img
  container.appendChild(NewFieldContainer);
}


function deleteField(event) {
  const span = event.currentTarget;

  const fieldContainer = document.querySelectorAll(".new-upload");

  if (fieldContainer.length <= 1) {
    //limpar
    span.parentNode.children[0].value =""
    return;
  }
  span.parentNode.remove()
}


//troca do sim e não 


function toggleSelect(event){
     //retirar a classe active dos button
     document.querySelectorAll('.button-select button')
     .forEach((button) => {
         button.classList.remove('active')
     });
     //colocar a class active no btn selecionado
     const button = event.currentTarget
     button.classList.add('active')

     //atualizar o input hidden com o valor selecionado
     const input = document.querySelector('[name=open-on-weekends]')

     input.value = button.dataset.value 

}





