var itemList = document.querySelector('#items');
console.log(itemList.parentElement);
itemList.parentElement.style.backgroundcolor = '#f4f4f4';

console.log(itemList.children);
console.log(itemList.firstChild);
itemList.firstElementChild.textContent='whose';
itemList.lastElementChild.textContent='HEllo';

console.log(itemList.nextSibling);
console.log(itemList.nextElementSibling);
console.log(itemList.previousSibling);
console.log(itemList.previousElementSibling);
itemList.previousElementSibling.style.color='red';

// create a new element
var newdiv = document.createElement('div');
newdiv.setAttribute('id','hello1');
newdiv.className='Hello';
newdiv.title='newElement';
//create a text node
var newdivText = document.createTextNode('Hello world');
newdiv.appendChild(newdivText);
//placed it before h1
var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');
container.insertBefore(newdiv,h1);
console.log(newdiv);

var ul = document.querySelector('.items');
ul.firstElementChild.textcontent = 'HEllo';

