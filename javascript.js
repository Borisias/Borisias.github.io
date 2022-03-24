let email = document.getElementById("email");
let subject = document.getElementById("subject");
let comment = document.getElementById("comment")
let btnSubmit = document.getElementById("btn-submit")
let emailValid = false
let commentValid = false
let subjectValid = false

validation()

email.addEventListener("blur", (e) => {
    let val = e.target.value;
    let regx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let text = document.getElementById("span1");

    if (val.match(regx)) {
        text.textContent = "E-mail address is valid"
        text.style.color = "green"
        emailValid = true
    }
    else if (val == "") {
        text.textContent = "This fied is required"
        text.style.color = "red"
        emailValid = false
    }
    else {
        text.textContent = "Please enter valid e-mail address"
        text.style.color = "red"
        emailValid = false
    }
    validation()
})

subject.addEventListener("blur", (e) => {
    let val2 = e.target.value;
    let text2 = document.getElementById("span2");

    if (val2 == "") {
        text2.textContent = "This field is required"
        text2.style.color = "red"
        subjectValid = false
    }
    else {
        text2.textContent = ""
        subjectValid = true
    }
    validation()
})

comment.addEventListener("blur", (e) => {
    let val3 = e.target.value;
    let text3 = document.getElementById("span3");

    if (val3 == "") {
        text3.textContent = "This field is required"
        text3.style.color = "red"
        commentValid = false
    }
    else {
        text3.textContent = ""
        commentValid = true
    }
    validation()
})

function validation(){
    if (emailValid && commentValid && subjectValid == true) {
        btnSubmit.disabled = false
    }
    else {
        btnSubmit.disabled = true
    }
}
btnSubmit.addEventListener("click", (e) => {
    alert("Thank you for your message")
})

