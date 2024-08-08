const header = document.createElement('header');
const nav = document.createElement('nav');

const body = document.querySelector('body');

body.appendChild(header);
header.appendChild(nav);

const logoHeader = document.createElement('a');
logoHeader.className = "logo";
logoHeader.textContent = "Coffee Shop";
nav.appendChild(logoHeader);

const navList = document.createElement('ul');
navList.className = "nav-list";

const navListItemOne = document.createElement('li');
const navListItemTwo = document.createElement('li');
const navListItemThree = document.createElement('li');
const navListItemFour = document.createElement('li');

const linkHome = document.createElement('a');
linkHome.textContent = "Home";
const linkMenu = document.createElement('a');
linkMenu.textContent = "Menu";
const linkAbout = document.createElement('a');
linkAbout.textContent = "About";
const linkContact = document.createElement('a');
linkContact.textContent = "Contact";

nav.appendChild(navList);
navList.append(navListItemOne, navListItemTwo, navListItemThree, navListItemFour);
navListItemOne.appendChild(linkHome);
navListItemTwo.appendChild(linkMenu);
navListItemThree.appendChild(linkAbout);
navListItemFour.appendChild(linkContact);


