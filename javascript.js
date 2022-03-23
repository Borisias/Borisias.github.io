/* function validation(InputText) {
    let text = document.getElementById("span1")
    let regx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if (InputText.value.match(regx)){
        text.innerHTML = "E-mail address is valid"
        text.style.color = "green"
        document.form.email.focus()
        return true
    }
    else{
        text.innerHTML = "Please enter a valid e-mail address"
        text.style.color = "red"
        document.form.email.focus()
        return false
    }

} */

let email = document.getElementById("email");

email.addEventListener("blur", (e) => {
    let val = e.target.value;
    let regx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let text = document.getElementById("span1");

    if (val.match(regx))
    {
        text.innerHTML = "E-mail address is valid"
        text.style.color = "green"
        return true
    }
    else
    {
        text.innerHTML = "Please enter valid e-mail address"
        text.style.color = "red"
        return false
    }

})

