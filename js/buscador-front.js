//Declaración de Variables del DOM

let botonVender = document.querySelector(".button-5");
let inputBuscador = document.querySelector(".buscador");
let itemName = document.querySelectorAll("#model")
let dropdown = document.querySelector(".dropdown");
let contenedorItem = document.querySelector(".contenedor__items");
let items = document.querySelectorAll(".item");
const itemsArray = Array.apply(null, items);
let ItemsArreglo = [];

//MODAL PARA VENDER AUTO
let modal = document.querySelector(".modal");
let closeModal = document.querySelector(".close");

const venderItem = ()=>{
   modal.style.display = 'block';
}

botonVender.addEventListener("click",venderItem)
closeModal.addEventListener("click",()=>modal.style.display='none')


// EVENTLISTENER PARA BUSCAR UN AUTO
window.addEventListener("keydown",(e)=>{
    if(e.key === "Enter"){
console.log(itemsArray)
        e.preventDefault();
        if(inputBuscador.value == "" && dropdown.value === "all"){
            for (let i = 0; i < items.length; i++){
                contenedorItem.innerHTML += itemsArray[i].outerHTML;
                }}

            //Switch for search cars
            switch(dropdown.value){
                case "all":
                    let result = itemsArray.filter(function (item,index) {contenedorItem.innerHTML=""; return  item.children[1].children[0].innerHTML.toLowerCase().match(inputBuscador.value.toLowerCase().trim())})
                    for (let i = 0; i < result.length; i++){
                       contenedorItem.innerHTML +=  result[i].outerHTML;
                    }
                    break;
                case "camioneta":
                    let resultC = itemsArray.filter(function (item,index) {contenedorItem.innerHTML=""; return item.children[1].children[0].innerHTML.toLowerCase().match(inputBuscador.value.toLowerCase().trim())})
                    for (let i = 0; i < resultC.length; i++){
                        if(resultC[i].id == "camioneta"){
                            contenedorItem.innerHTML +=  resultC[i].outerHTML;}
                        }

                    break;

                    case "sedan":
                        let resultS = itemsArray.filter(function (item,index) {contenedorItem.innerHTML=""; return  item.children[1].children[0].innerHTML.toLowerCase().match(inputBuscador.value.toLowerCase().trim())})
                        for (let i = 0; i < resultS.length; i++){
                            if(resultS[i].id == "sedan"){
                                contenedorItem.innerHTML +=  resultS[i].outerHTML;
                            }}
                        break;

                        case "pickup":
                        let resultP = itemsArray.filter(function (item,index) {contenedorItem.innerHTML=""; return  item.children[1].children[0].innerHTML.toLowerCase().match(inputBuscador.value.toLowerCase().trim())})
                            for (let i = 0; i < resultP.length; i++){
                            if(resultP[i].id == "pickup"){
                                    contenedorItem.innerHTML +=  resultP[i].outerHTML;
                                }}
                            break;

                            
                        case "electrico":
                            let resultE = itemsArray.filter(function (item,index) {contenedorItem.innerHTML=""; return  item.children[1].children[0].innerHTML.toLowerCase().match(inputBuscador.value.toLowerCase().trim())})
                                for (let i = 0; i < resultE.length; i++){
                                if(resultE[i].id == "electrico"){
                                        contenedorItem.innerHTML +=  resultE[i].outerHTML;
                                    }}
                                break;
            }
        }
    })