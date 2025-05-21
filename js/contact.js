document.querySelector("button").addEventListener("click", showInquery)
document.querySelector("#yourInquery").style.display = "none";

function showInquery() {
    // console
    console.log("show inquery")

    // hide form
    document.querySelector("#contactform").style.display = "none";

    // change btn background color + text
    document.querySelector("button").style.backgroundColor = "#0707a3";
    document.querySelector("button").textContent = "Submitted";

    // show summary
    document.querySelector("#yourInquery").style.display = "block";

    // summary
    document.querySelector("#fNameSum").textContent = document.querySelector("#f-name").value;
    document.querySelector("#lNameSum").textContent = document.querySelector("#l-name").value;
    document.querySelector("#mailSum").textContent = document.querySelector("#email").value;
    document.querySelector("#subjectSum").textContent = document.querySelector('input[name="subject"]:checked').value;
    document.querySelector("#messageSum").textContent = document.querySelector("#message").value;
}