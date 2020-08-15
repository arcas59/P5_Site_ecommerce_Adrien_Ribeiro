// Ajout des élèments de façon dynamique grâce à la méthode .foreach

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
link.href = "produit.html?id=" + data._id;

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
nomReflex.className = "menu5CSS";

link.appendChild(nomReflex);

const prixReflex = document.createElement("p");
prixReflex.innerText = numStr(data.price) + " €";

nomReflex.appendChild(prixReflex);

return el;
};

// Requete au serveur XMLHttpRequest grâce aux promesses Resolve et Reject

let reflexRequest = function (url) {
  return new Promise(function (resolve, reject) {
    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          resolve(xhr.responseText);
        } else {
          reject(xhr);
        };
      };
    };
    xhr.open('GET',url, true);
    xhr.send();
  })
};

reflexRequest("http://localhost:3000/api/cameras/").then(function (response) {
  const data = getParsedData(response);
            data.forEach(function (d) {
            const element = createElement(d);
            list.appendChild(element);
            console.log("Retour serveur: ", d);
            });
            
            
}).catch(function (error) {
    alert("Désolé, nous avons un problème avec le serveur...")
    console.log("Problème sevreur détecté !")
});
