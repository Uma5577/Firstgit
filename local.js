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
    const parentElem = document.getElementById('list of items')

    const childElem = document.createElement('li')
    childElem.textContent = obj.name + ' - ' + obj.email

    const deleteButton = document.createElement('input')
    deleteButton.type = "button"
    deleteButton.value = "Edit"
    deleteButton.onclick = () => {
        localStorage.removeItem(obj.email)
        parentElem.removeChild(childElem)
        document.getElementById('usernameInputTag').value = obj.name
        document.getElementById('emailInputTag').value = obj.email


    }

    childElem.appendChild(deleteButton)
    childElem.appendChild(editButton)
    parentElem.appendChild(childElem)


    

}
