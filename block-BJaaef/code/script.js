

let parentElm = document.querySelector(".main");

let allPeople = got.houses.reduce((acc,cv) =>{
    acc = acc.concat(cv.people);
    return acc; 
},[]);
let cardsHTML = allPeople.map((person) => {
    return `
    <div class="col box">
    <img src= ${person.image}
    alt = ${person.name}/>
    <h2> ${person.name}</h2>
    <p>${person.description}</p>
    <a href=${person.wikiLink}>Learn More!</a>
  </div>
    `
});

parentElm.innerHTML = cardsHTML.join("");