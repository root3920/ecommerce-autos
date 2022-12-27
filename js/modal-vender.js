let dropdownMarca = document.getElementById('fdropdown');
let inputYear = document.querySelector("#fyear");
let inputModel = document.getElementById('fmodel');
let inputImage = document.querySelector("#file-input")
let inputImage2 = document.querySelector(".file-input__label")
let botonRegistrar = document.querySelector(".button-2");
let inputPrice = document.querySelector("#fprice");
let dropdownTipo = document.querySelector("#fdropdown2");
let mensaje = document.querySelector(".msj");
    

//FILE READER
    inputImage.addEventListener("change", ()=>{
        const fr = new FileReader();
        fr.readAsDataURL(inputImage.files[0])
    
        fr.addEventListener("load", ()=>{
            let spanM = document.querySelector(".spanUpload");
            spanM.textContent = "File Uploaded"
            inputImage2.style.backgroundColor = "#fa6400"
            inputImage2.style.color = "white"
            const url = fr.result;
            console.log(url);
            const img = new Image();
            img.src = url;
            load(url);
        })
     })



//BOTON PARA REGISTRAR UN AUTO Y VENDERLO
function load (url){     
botonRegistrar.addEventListener("click",(e)=>{
    let num;
    let num2;
    e.preventDefault();

    //if para controlar que todos los campos esten llenos

    if(inputPrice.value != "" && inputModel.value != "" && (inputYear.value != "" && inputYear.value > 2013 && inputYear.value < 2025)){

        //busca si existe un punto en el precio (Para cambiarlo por una coma)
        
        let buscarpunto = inputPrice.value.indexOf('.');
        console.log(buscarpunto)
        if(!inputPrice.value.includes(".") && inputPrice.value.length < 8 && inputPrice.value != "" && inputPrice.value > 999){
            if(inputPrice.value.length < 5){
                num = inputPrice.value.slice(0, 1)
                num2 = inputPrice.value.slice(1, 4)
                console.log(`${num},${num2}`)
            }else if(inputPrice.value.length < 6){
                num = inputPrice.value.slice(0, 2)
                num2 = inputPrice.value.slice(2, 5)
                console.log(`${num},${num2}`)
            }else{
                num = inputPrice.value.slice(0, 3)
                num2 = inputPrice.value.slice(3, 6)
                console.log(`${num},${num2}`)
            }

            let nodo = document.createElement("div");
            let codeHtml = `<div class="item" id="${dropdownTipo.value}" marca="${dropdownMarca.value.toLowerCase()}" model="${inputModel.value.toLowerCase()}">
             <img src="${url}" alt="${dropdownMarca.value.toLowerCase()} ${inputModel.value.toLowerCase()}">
             <div class="item__info"> 
                 <h2 id="model" >${dropdownMarca.value} ${inputModel.value}</h2>
                 <p id="year">${inputYear.value}</p>
                 <h3 class="price">${num},${num2}</h3>
             </div>
             </div>`
             mensaje.classList.remove("error")
             mensaje.classList.add("msj")
             mensaje.textContent = "Auto registrado correctamente"
             mensaje.style.display = "block"    
             nodo.innerHTML = codeHtml;
             itemsArray.push(nodo.children[0]);
            contenedorItem.innerHTML += nodo.innerHTML
            
        }else if(inputPrice.value.includes(".") && inputPrice.value.length < 8 && inputPrice.value != "" && (inputPrice.value > 999 || buscarpunto != -1)){
            let parte1=inputPrice.value.substring(0,buscarpunto)
            let parte2=inputPrice.value.substring(buscarpunto+1,inputPrice.value.length)
             let final=parte1+","+parte2; 
            let nodo = document.createElement("div");
            let codeHtml = `<div class="item" id="${dropdownTipo.value}" marca="${dropdownMarca.value.toLowerCase()}" model="${inputModel.value.toLowerCase()}">
            <img src="${url}" alt="${dropdownMarca.value.toLowerCase()} ${inputModel.value.toLowerCase()}">
            <div class="item__info"> 
                <h2 id="model" >${dropdownMarca.value} ${inputModel.value}</h2>
                <p id="year">${inputYear.value}</p>
                <h3 class="price">${final}</h3>
            </div>
            </div>`
            mensaje.classList.remove("error")
            mensaje.classList.add("msj")
            mensaje.textContent = "Auto registrado correctamente"
            mensaje.style.display = "block"
             nodo.innerHTML = codeHtml;
             itemsArray.push(nodo.children[0]);
            contenedorItem.innerHTML += nodo.innerHTML
            
        }  else{
            mensaje.textContent = "Error en el precio: Contacte al soporte"
            mensaje.classList.remove("msj")
            mensaje.classList.add("error")
        }
    }else{
        mensaje.textContent = "Complete toda la informacion"
        mensaje.classList.remove("msj")
        mensaje.classList.add("error")
    }
    }
)
}
 
botonRegistrar.addEventListener("click",(e)=>{
e.preventDefault();
if(inputPrice.value == "" || inputModel.value == "" || inputYear.value == ""){
    mensaje.textContent = "Complete toda la informacion"
    mensaje.classList.remove("msj")
    mensaje.classList.add("error")
}
})
