// const y = document.getElementById('main-header');
// y.style.borderBottom = 'solid 3px #000';
// const z = document.getElementsByClassName('title');
// console.log(z[0]);
// z[0].style.fontWeight = 'bold';
// z[0].style.color = 'green';

// const items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].textContent = 'hello';
// items[2].style.backgroundColor = 'green';
// for (var i = 0; i<items.length;i++){
//     items[i].style.backgroundColor='#f0f0f0';
// }
// for (var i = 0; i<items.length;i++){
//     items[i].style.fontWeight= 'bold';
// }


//This is by tag name a new <li>Items 5</li> is added in html.//
// const li = document.getElementsByTagName('li');

// console.log(li);

// console.log(li[1]);

// li[4].textContent = 'hello';

// li[4].style.backgroundColor = 'green';

// for (var i = 0; i<li.length;i++){

//   li[i].style.backgroundColor='#f0f0f0';

// }        
//This by class name//

// const items = document.getElementsByClassName('list-group-item');

// console.log(items);

// console.log(items[1]);

// items[3].textContent = 'hello';

// items[3].style.backgroundColor = 'green';


//Querryselector//

const header = document.querySelector('#main-header');
header.style.borderBottom = 'solid 4px #ccc';

const input = document.querySelector('input');
input.value = 'Hello world';

const submit = document.querySelector('input[type="submit"]');
submit.value = "SEND"

const items = document.querySelector('.list-group-item');
items.style.color = "red";

const lastitems = document.querySelector('.list-group-item:last-child');
lastitems.style.color="blue";

const seconditem = document.querySelector('.list-group-item:nth-child(2)');
seconditem.style.backgroundColor="green";

const sec = document.querySelector('.list-group-item:nth-child(3)');
sec.style.display='none';

//Queryselectorall//

const titles = document.querySelectorAll('.title');
console.log(titles);
titles[0].textContent = 'Hello';

const list = document.querySelectorAll('.list-group-item');
list[1].style.color = 'green';

const odd = document.querySelectorAll('li:nth-child(odd)');
for(var i = 0;i<odd.length;i++){
    odd[i].style.backgroundColor="green";
}