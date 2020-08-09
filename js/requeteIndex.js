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
  nomReflex.className = "menu5CSS";

  link.appendChild(nomReflex);

  const prixReflex = document.createElement("p");
  prixReflex.innerText = data.price + " €";

  nomReflex.appendChild(prixReflex);

  return el;
};

/*
Test avec demande Fetch
var Reflex = function (url) {
    return new Promise(function (resolve, reject) {
      var xhr = new XMLHttpRequest();
  
      xhr.onreadystatechange = function () {
        if (this.readyState == XMLHttpRequest.DONE &&
        this.status >= 200 &&
        this.status < 300)}
        {
        const data = getParsedData(this.responseText);
        data.forEach(function (d) {
        const element = createElement(d);
        list.appendChild(element);
        });};
          } else {
            reject(xhr);
            // alerte si le serveur ne répond pas
            alert("Nous sommes désolé, le serveur ne répond pas ! ")
          };
        };
      };
      xhr.open('GET','http://localhost:3000/api/cameras/', true);
      xhr.send();
    });
  };
*/

//Requete au serveur
const xhr = new XMLHttpRequest();

xhr.onreadystatechange = function () {
  if (
    this.readyState == XMLHttpRequest.DONE &&
    this.status >= 200 &&
    this.status < 300
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
