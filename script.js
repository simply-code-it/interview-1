let btn = document.getElementById("btn");

btn.addEventListener("click", () => {
    var formElements = document.getElementById("form").elements;
    var postData = {};
    for (var i = 0; i < formElements.length; i++)
        if (formElements[i].type != "submit") { //we dont want to include the submit-buttom
            postData[formElements[i].name] = formElements[i].value;

        }
    console.log(postData);
    addDiv(postData);

});
// let key = postData.keys;
function addDiv(postData) {
    let el = document.createElement("p");
    let str = "";
    let key = Object.keys(postData);
    for (let i = 0; i < key.length; i++) {
        str += `${postData[key[i]]} `;
        str += "\n";

    }
    let tnode = document.createTextNode(str);
    let data = el.appendChild(tnode);
    let setdata = localStorage.setItem("details", JSON.stringify(str));
    let cont = document.getElementById("appd");
    let details = localStorage.getItem("details");
    cont.appendChild(details);
}