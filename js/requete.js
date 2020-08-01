const list = document.getElementById("listecam");
list.className = "menu1CSS";

const getParsedData = function (data) {
    return JSON.parse(data);
};

const createElement = function (data) {
    const el = document.createElement("DIV");
    el.classList.add("cam");
    el.className = "menu2CSS";

    const link = document.createElement("A");
    link.href = "/vcam.html?id=" + data._id;

    el.appendChild(link);

    const elChild = document.createElement("DIV");
    elChild.classList.add("imgContainer");

    link.appendChild(elChild);

    const imgReflex = document.createElement("IMG");
    imgReflex.className = "menu3CSS";
    imgReflex.alt = data.name;
    imgReflex.src = data.imageUrl;

    elChild.appendChild(imgReflex);

    const nomReflex = document.createElement("p");
    nomReflex.innerText = data.name;
    nomReflex.className = "menu4CSS";

    link.appendChild(nomReflex);

    const prixReflex = document.createElement("p");
    prixReflex.innerText = data.price + " €";
    prixReflex.className = "menu5CSS";

    nomReflex.appendChild(prixReflex);

    return el;
};

const xhr = new XMLHttpRequest();

xhr.onreadystatechange = function () {
    if (
        this.readyState == XMLHttpRequest.DONE &&
        this.status >= 200 &&
        this.status < 300
    ) {
        const data = getParsedData(this.responseText);
        // console.log("reponse:", data);
        data.forEach(function (d) {
            // console.log("d", d);
            const element = createElement(d);
            // console.log("ele", element);
            list.appendChild(element);
        });
    }
};
xhr.open("GET", "http://localhost:3000/api/cameras", true);
xhr.send();