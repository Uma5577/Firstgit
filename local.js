function saveToLocalStorage(event){
    event.preventDefault();
    const name=event.target.username.value;
    const email = event.target.emailId.value;
    localStorage.setItem('name',name);
    localStorage.setItem('email',email);
    let myobj ={
        name,
        email
    }
    localStorage.setItem('userDetails',JSON.stringify(myobj));


}

function showUserOnScreen(obj){
    const parentElem = document.getElementById('listOfitems');
    parentElem.innerHTML = parentElem.innerHTML + <li> ${obj.name} - ${obj.email} </li>
}