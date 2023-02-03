function saveToLocalStorage(event){
    const name=event.target.username.value;
    const email = event.target.emailId.value;
    const phone_number = event.target.phone_number.value;
    localStorage.setItem('name',name);
    localStorage.setItem('email',email);
    localStorage.setItem('phone_number',phone_number);

}