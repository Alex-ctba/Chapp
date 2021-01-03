/*configurações do mapa */
const options = {
    dragging:false,
    touchZoom:false,  
    doubleClickZoom:false,
    scroolWheelZoom:false,
    zoomControl:false
}

const Lat = document.querySelector('span[data-lat]').dataset.lat
const Lng = document.querySelector('span[data-lng]').dataset.lng

const map = L.map('mapid', options).setView([Lat, Lng], 13)


L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map)

//criação do icone
const icon = L.icon({
    iconUrl:"https://img.icons8.com/color/48/000000/job--v1.png",
    iconSize:[58, 68],
    iconAnchor:[29, 68],
    popupAnchor:[170, 2]
})

/*create popup overlay and desativate
const popup = L.popup({
    closeButton: false,
    className:'map-popup',
    minWidth: 240,
    minHeight: 240
}).setContent('Curitiba uma ótima cidade para se morar <a href="/cadastro" class="choose-cadastro"><img src="/images/arrow-white.svg"></a>')
*/



L.marker([Lat, Lng], { icon })
.addTo(map)

//.bindPopup(popup)



/* image gallary */


function selectImage(event){
      const button = event.currentTarget

    console.log(button.children)

      //remover todas as classes .active
        const buttons = document.querySelectorAll('div.images button')
      
        buttons.forEach((button) => {
            button.classList.remove("active") 
        });

        console.log(buttons)
      //selecionar a img clicada 
      const image = button.children[0]
      const imageContainer = document.querySelector('.cadastro-details > img')
      //atualizar o container imagem grande
        imageContainer.src = image.src
      //Adicionar de volta a classe .active para o clicado
      button.classList.add('active')
}
