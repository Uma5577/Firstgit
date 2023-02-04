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


// this is by tag name a new <li>Items 5</li> is added in html.
const li = document.getElementsByTagName('li');

console.log(li);

console.log(li[1]);

li[4].textContent = 'hello';

li[4].style.backgroundColor = 'green';

for (var i = 0; i<li.length;i++){

  li[i].style.backgroundColor='#f0f0f0';

}
// this by class name

const items = document.getElementsByClassName('list-group-item');

console.log(items);

console.log(items[1]);

items[3].textContent = 'hello';

items[3].style.backgroundColor = 'green';