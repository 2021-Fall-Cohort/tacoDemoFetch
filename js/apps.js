//import {taco} from "./taco.js";

//http://localhost:5000/random/
const generateButtonEl = document.querySelector(".generator_button");



generateButtonEl.addEventListener("click", ()=>{
    BuildTaco();
});

const BuildTaco = function(){
    fetch("http://localhost:5000/random/")
        .then(res => res.json())
        .then(taco => {
            const baseLayerEl = document.querySelector(".base_layer");
            const shellEl = document.querySelector(".shell");
            const mixinEl = document.querySelector(".mixin");
            const condimentEl = document.querySelector(".condiment");
            const seasoningEl = document.querySelector(".seasoning");
            
            baseLayerEl.innerHTML = `<h2>Base Layer: ${taco.base_layer.name}</h2>`;
            baseLayerEl.innerHTML += `<p>Base Layer Recipe: ${taco.base_layer.recipe}></p>`
            
            shellEl.innerHTML = `<h2>Shell: ${taco.shell.name} </h2> `;
            shellEl.innerHTML += `<p>Shell recipe: ${taco.shell.recipe} </p>`;
            
            mixinEl.innerHTML = `<h2>mixins: ${taco.mixin.name} </h2>`;
            mixinEl.innerHTML += `<p>mixinsRecipe: ${taco.mixin.recipe} </p>`;
            
            condimentEl.innerHTML =`<h2>Condiments:${taco.condiment.name}</h2>`;
            condimentEl.innerHTML +=`<p>Condiment recipe: ${taco.condiment.recipe}</p>`;
            
            
            seasoningEl.innerHTML = `<h2>Seasoning: ${taco.seasoning.name} </h2>`;
            seasoningEl.innerHTML += `<p>Seasoning recipe: ${taco.seasoning.recipe} </p>`;
            
        });
};    

BuildTaco();
//console.log(taco);

