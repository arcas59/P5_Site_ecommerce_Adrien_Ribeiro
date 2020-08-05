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
    link.href = "vcam.html?id=" + data._id;

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

/*
Test avec demande Fetch
fetch("http://localhost:3000/api/cameras") 
    .then(function (reponse) {
        return response.json()
    }).then(function (data) {
        console.log(data)
    })
*/

//Requete au serveur 
const xhr = new XMLHttpRequest();
/*Fonction avec le statut du serveur
Si le readystate est done, que le status du serveur est supérieur ou égal à 200 et inférieur à 300
Alors on créera la constante "data" 
Pour chaque element de data on va appliquer une fonction "d"
Nous allons ensuite créer un element avec la méthode "createElement"
Nous allons créer ensuite une liste ayant pour parent "element".
*/
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

/* La contante "xhr" utilise la méthode ".open" pour une Requete au serveur avec "Get"
 afin de récuperer les données
 */
xhr.open("GET", "http://localhost:3000/api/cameras", true);
//La constante "xhr" nous renvoi le resultat de la requête grâce à méthode "".send"
xhr.send(); 
