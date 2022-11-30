import './style.css'

const content = document.querySelector("#content");
const heading = document.createElement('div');
const headerOne = document.createElement('h1');
const buttonHome = document.createElement('div');
const buttonAbout = document.createElement('div');
const buttonContact = document.createElement('div');
const buttonHolder = document.createElement('div');
const middle = document.createElement('div');
const headerTwo = document.createElement('div');
const foodOne = document.createElement('div');
const foodTwo = document.createElement('div');
const foodThree = document.createElement('div');
const footer = document.createElement('div');
const instagram = document.createElement('img');
const twitter = document.createElement('img');
const facebook = document.createElement('img');
const nasiImg = document.createElement('img');
const rendangImg = document.createElement('img');
const sateImg = document.createElement('img');
const nasi = document.createElement('div');
const rendang = document.createElement('div');
const sate = document.createElement('div');
const foodHolder = document.createElement('div');
const randomText = document.createElement('div');
const randomTextTwo = document.createElement('div');

nasiImg.src = '../dist/nasi-goreng.jpg';
rendangImg.src = '../dist/rendang.jpg';
sateImg.src = '../dist/Sate-Padang.jpeg';

let contentArr = [heading, middle, footer];
let foodArr = [foodOne, foodTwo, foodThree];
let buttonArr = [buttonHome, buttonAbout, buttonContact];
let headingArr = [headerOne, buttonHolder];
let middleArr = [headerTwo, foodHolder];
let footerArr = [instagram, twitter, facebook, randomText];
let foodOneArr = [nasiImg, nasi];
let foodTwoArr = [sateImg, sate];
let foodThreeArr = [rendangImg, rendang];

function appendElement (a, array) {
  for (let i = 0; i < array.length; i++){
    a.appendChild(array[i]);
  } 
}

randomText.textContent = "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
randomTextTwo.textContent = "021930921039021930903902 Contact Me Biatch"

headerOne.textContent = 'Warung Sekata';
buttonHome.textContent = 'Home';
buttonAbout.textContent = 'About';
buttonContact.textContent = 'Contact Us';
headerTwo.textContent = 'Iconic Dishes';
nasi.textContent = 'Nasi Goreng';
sate.textContent = 'Sate Padang';
rendang.textContent = 'Rendang';

appendElement(buttonHolder, buttonArr);
appendElement(foodOne, foodOneArr);

appendElement(foodTwo, foodTwoArr);
appendElement(foodThree, foodThreeArr);

appendElement(foodHolder, foodArr);


appendElement(heading, headingArr);
appendElement(middle, middleArr);
appendElement(footer, footerArr);

appendElement(content, contentArr);

heading.classList.add('heading');
middle.classList.add('middle');
footer.classList.add('footer');
foodHolder.classList.add('foodHolder');
nasiImg.classList.add('img');
rendangImg.classList.add('img');
sateImg.classList.add('img');
buttonHolder.classList.add('buttonHolder');

function changeTabAbout () {
  middle.replaceChildren();
  middle.appendChild(randomText);
}

function changeTabHome () {
  middle.replaceChildren();
  appendElement(middle, middleArr);
  footer.appendChild(randomText);
}

function changeTabContact () {
  middle.replaceChildren();
  middle.appendChild(randomTextTwo);
}

buttonAbout.addEventListener('click', changeTabAbout);
buttonHome.addEventListener('click', changeTabHome);
buttonContact.addEventListener('click', changeTabContact);
