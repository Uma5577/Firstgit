function saveToLocalStorage(event){
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