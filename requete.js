// Reqete vers server pour recuperer Data ----------------------------------------------------

const idCamera = new URLSearchParams(window.location.search).get("id");

const getParsedData = function (data) {
    return JSON.parse(data);
};

const xhr = new XMLHttpRequest();

xhr.onreadystatechange = function () {
    if (
        this.readyState == XMLHttpRequest.DONE &&
        this.status >= 200 &&
        this.status < 300
    ) {
        const data = getParsedData(this.responseText);
        console.log("reponse:", data);
        data.forEach(function (d) {
        // 	// console.log("d", d);
        const element = createElement(d);
        // 	// console.log("ele", element);
        list.appendChild(element);
        });
    } else {
        alert("Nous avons un problème avec le serveur, désolé")
    }
};
xhr.open("GET", "http://localhost:3000/api/cameras/" + idCamera, true);
xhr.send();
