{/* <main class="main row container">
<div class="col box">
  <img src="https://raw.githubusercontent.com/nnnkit/json-data-collections/master/game-of-thrones/game-of-thrones-eddard-stark.jpg" alt="img=1">
  <h2>Eddard "Ned" Stark</h2>
  <p>Lord of Winterfell - Warden of the North - Hand of the King - Married to Catelyn (Tully) Stark</p>
  <a href="#">Learn More!</a>
</div>
<div class="col box">
  <img src="https://raw.githubusercontent.com/nnnkit/json-data-collections/master/game-of-thrones/game-of-thrones-eddard-stark.jpg" alt="img=1">
  <h2>Eddard "Ned" Stark</h2>
  <p>Lord of Winterfell - Warden of the North - Hand of the King - Married to Catelyn (Tully) Stark</p>
  <a href="#">Learn More!</a>
</div>
</main> */}

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