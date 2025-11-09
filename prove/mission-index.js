let selectElem = document.querySelector('select');
let logo = document.querySelector('img');
let heading = document.querySelector("h2");
let content = document.querySelector("#complete-content");

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if (current === 'dark') {
        // code for changes to colors and logo
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        content.style.border = "1px solid white";
        heading.style.color = "lightblue";
        logo.src = "byui-logo-dark.png";
    } else {
        // code for changes to colors and logo
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        content.style.border = "1px solid black";
        heading.style.color = "#035f9c";
        logo.src= "byui-logo.png";
    }
}           
                    