const button = document.querySelector("button");
const croissant = document.getElementById("croissant");
const textInput = document.getElementById("texte");
const rangeInput = document.querySelector("#range");
const afficherRange = document.getElementById("afficherRange")
const cards = document.querySelector(".cards");
let repas =[];
let recherche= "";


// Fonctionnalité de recherche de repas
const fetchRepas = ()  => { 
    fetch("https://themealdb.com/api/json/v1/1/search.php?s="+recherche)
  .then((response) => response.json())
  .then((data) => {
    repas =(data.meals);
    console.log(repas);
    afficherRepas();
});
}

const afficherRepas = ()  => {
    cards.innerHTML = "";
    repas.map((r)=>{
        cards.innerHTML += `
        <div class="card">
        <h2>${r.strMeal}</h2>
        <h3>Origine : ${r.strArea}</h3>
        <img src="${r.strMealThumb}" alt="">
        <p>${r.strInstructions}</p>
        </div>
        `;
    })
    
};

textInput.addEventListener("change",()=>{
    recherche = textInput.value;
    fetchRepas();

})

fetchRepas();

rangeInput.addEventListener("input", () => {
    range = rangeInput.value
    afficherRepas();
})

