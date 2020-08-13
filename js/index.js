//Chargement des articles sur le panier dynamiquement
function chargementPanier(){
  let nombreProduit = localStorage.getItem('qté'); 
  
  if(nombreProduit){
  document.querySelector ('.totalQté').textContent = nombreProduit;
  }else{
      document.querySelector ('.totalQté').textContent = "" ;
  }
}
chargementPanier(); 

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
prixReflex.innerText = data.price + " €";

nomReflex.appendChild(prixReflex);

return el;
};

//Requete au serveur XMLHttpRequest

const xhr = new XMLHttpRequest();

xhr.onreadystatechange = function () {
if (
  this.readyState == XMLHttpRequest.DONE &&
  this.status == 200
) {
  const data = getParsedData(this.responseText);
  data.forEach(function (d) {
    const element = createElement(d);
    list.appendChild(element);
  });
}
};

xhr.open("GET", "http://localhost:3000/api/cameras", true);

xhr.send();


/* Méthode Fetch + GET pour aller chercher les données sur le serveur
var reflexRequest = function (url) {
return new Promise(function (resolve, reject) {
  var xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        resolve(
          const data = getParsedData(this.responseText);
          data.forEach(function (d) {
          const element = createElement(d);
          list.appendChild(element);
        ));
      } else {
        reject(xhr);
        // alerte si le serveur ne répond pas
        alert("Désolé, nous avons un problème avec le serveur...")
      };
    };
  };
  xhr.open('GET','http://localhost:3000/api/cameras/', true);
  xhr.send();
});
};
*/
/*
fetch('http://localhost:3000/api/cameras')
  .then(function (response) {
    return response.json()
  }).then(function (data) {
    console.log(data);
  }).then(
      data.forEach(function (d) {
      const element = createElement(d);
      list.appendChild(element);
  );
*/