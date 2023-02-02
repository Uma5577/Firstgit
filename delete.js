var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter'); 
//Form submit event
form.addEventListener('submit', addItem);

//Delete Event
itemList.addEventListener('click',removeItem);

//Filter Event
filter.addEventListener('keyup',filterItems);

 
