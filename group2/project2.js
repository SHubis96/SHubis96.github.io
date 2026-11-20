function changeAll()
{
    let userName = document.getElementById("userName").value;
    document.getElementById("greeting").textContent = "Hello " + userName + "!";
    let userMessage = document.getElementById("userMessage").value;
    document.getElementById("welcome").textContent = userMessage;
    let options = document.getElementById("options").value;
    document.body.style.backgroundColor = options;
}