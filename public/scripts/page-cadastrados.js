

const map = L.map('mapid').setView([-14.800000, -69.6865109],4)


L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map)


//criação do icone
const icon = L.icon({
    iconUrl:"https://img.icons8.com/color/48/000000/job--v1.png",
    iconSize:[58, 68],
    iconAnchor:[29, 68],
    popupAnchor:[170, 2]
})

function addMarker({id, name, lat, lng}){
    //create popup overlay
const popup = L.popup({
    closeButton: false,
    className:'map-popup',
    minWidth: 240,
    minHeight: 240
}).setContent(`${name}<a href="/cadastro?id=${id}"><img src="/images/arrow-white.svg"></a>`)

L.marker([lat, lng], { icon })
.addTo(map)
.bindPopup(popup)
}


const cadastradosSpan = document.querySelectorAll('.cadastrados span')

cadastradosSpan.forEach( span =>{
    const cadastro = {
        id: span.dataset.id,
        name: span.dataset.name,
        lat: span.dataset.lat,
        lng:span.dataset.lng
    }
    addMarker(cadastro)
})