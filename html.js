function validateLogin() {
    var regNumber = document.getElementById("regNumber").value;
    var password = document.getElementById("password").value;
    var message = document.getElementById("message")
    if (regNumber === "" || password === "") {
        message.style.color = "red";
        message.innerHTML = "regNumber and password do not match";
    } else {
        message.style.color = "green";
        message.innerHTML = "login succes!!.**welcome**";
    }
}
validateLogin()
function checkName() {
    const name="Anonymuscheck"
    const userInput=prompt("Verify if its you✔")

    if (userInput==name) {
        result=document.getElementById("name").innerText=`ACCESS GRANTED`
    }
    else{
        result=document.getElementById("name").innertExt=`Access denied`;
        window.location.href=
        "access-denied.html";//access denied page
    }
    return result
}
checkName()