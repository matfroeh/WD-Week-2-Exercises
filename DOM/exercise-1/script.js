const heroHeaderOne = document.querySelector('h1');
console.log(heroHeaderOne);

const elementsOfNav = document.querySelectorAll('.nav *');
console.log(elementsOfNav);

const buttonElement = document.getElementsByClassName('btn');
console.log(buttonElement);

heroHeaderOne.style.backgroundColor = "#b5651d";
heroHeaderOne.style.fontSize = "3rem";

elementsOfNav.forEach(element => {
    if (element.parentElement.className == "nav-item" && element.nodeName == "A") element.style.color ="#faf0e6"
});

const heroContainer = document.getElementsByClassName('hero-content');
const paragraphHeroContainer = document.createElement('p');

paragraphHeroContainer.textContent = 'Open daily from 7 AM to 9 PM.';
heroContainer.item(0).appendChild(paragraphHeroContainer);
