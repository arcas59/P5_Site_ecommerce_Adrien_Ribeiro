// Récupération de l'id produit dans l'URL dynamique ou query

let params = new URLSearchParams(document.location.search);
let id = params.get("id");
console.log("Id de l'URL dynamique: ", id);

let _id = id;
let reflex;


// Requete pour obtenir les informations du serveur

let article = () => {
    let request = new XMLHttpRequest();
      request.onreadystatechange = function () {
          if (this.readyState == 4 && this.status == 200) {
              reflex = JSON.parse(this.responseText);
              console.log("Retour serveur pour un produit: ", reflex);
              affichageProduit();
          }
      };
      request.open("GET", "http://localhost:3000/api/cameras/" + _id);
      request.send();
  };

// Chargement dynamique du Reflex dans la page produit
window.addEventListener("load", article);

// Création de la variable panier qui prendra les informations de la catégorie "panier" du localstorage
let panier = localStorage.getItem("panier");
panier = JSON.parse(panier);
localStorage.setItem("panier", JSON.stringify(panier));
console.log("Ajout au Panier de l'article: ", panier);

 // Affichage du produit sur la page
function affichageProduit() {
    
    let article = document.createElement("article");
    article.className = "menuproduit";
        let image = document.createElement("img");
        image.src =  reflex.imageUrl;
        image.className = "menu3CSS";
        id =  reflex._id;

    let div = document.createElement("div");
        div.className = "pos";
        let nom = document.createElement("h3");
        nom.textContent = reflex.name;
        nom.id = "Camera";
    
        let prix = document.createElement("h4");
        prix.textContent = "Prix :";
        let price = document.createElement("p");
        price.textContent = numStr(reflex.price) + " €";
    
        let desc = document.createElement("h4");
        desc.textContent = "Description :";
        let description = document.createElement("p");
        description.textContent = reflex.description;

    // Choix de la lentille
    let label = document.createElement("label");
    label.textContent = "Lentilles : ";
    let lenses = document.createElement("select");
    lenses.id = "choix";
    let choix = reflex.lenses;
    choix.id = "lentilles";

    // Création d'une boucle For pour afficher la liste déroulante des lentilles en options sur les cameras
    for (let i = 0; i < choix.length; i++) {
    let option = document.createElement("option");
    option.textContent = choix[i];
    option.id = "lentilles";
    lenses.appendChild(option);
    };

    // Création du bouton "Ajouter au panier"
    ajoutPanier = document.createElement ("button");
    ajoutPanier.id = "stockage";
    ajoutPanier.textContent = "Ajouter au panier";
    ajoutPanier.className = "pan1";

    ajoutPanier.addEventListener("click", function() {
            alert("Vous avez ajouté " + reflex.name + " à votre panier");
            console.log("L'article "+ reflex.name + "a été ajouté au panier");
            ajoutLocalStorage();
            nombreProduit();
            prixTotal();

        // Mise a jour du nombre de produit 
        function nombreProduit(){  
            let nombreProduit = localStorage.getItem("qté");  
            nombreProduit = parseInt(nombreProduit);
            
            if (nombreProduit){
                localStorage.setItem("qté", nombreProduit + 1);
                document.querySelector (".totalQté").textContent = nombreProduit + 1;
            } else{
                localStorage.setItem("qté", 1);
            document.querySelector (".totalQté").textContent = 1;
            };
        };
        // Mise a jour du nombre de produit dans l'objet "qté:" dans le localstorage 
        function ajoutLocalStorage(){
            let panier = localStorage.getItem("panier");
            panier = JSON.parse(panier);
            reflex.qté = 0;
            
            if(panier != null){

                if(panier[reflex.name] === undefined) {
                    panier = {...panier, [reflex.name] : reflex}
                }
                panier[reflex.name].qté += 1;
            } else {
                panier = {[reflex.name] : reflex}
                panier[reflex.name].qté += 1;
            }
            localStorage.setItem("panier", JSON.stringify(panier));
        };

    // Fonction pour calculer la somme des prix dans la division "prixTotal" du localstorage
        function prixTotal(){
            let price = parseInt(reflex.price);
            let prixDuPanier = JSON.parse(localStorage.getItem("prixTotal"));
            
            if(prixDuPanier != null){
                localStorage.setItem("prixTotal", prixDuPanier + price);
            } else {
                localStorage.setItem("prixTotal", price);
            };
        };

    })
    // Chargement dynamqiue du DOM
    produit.appendChild(article);
    article.appendChild(nom);
    article.appendChild(image);
    article.appendChild(div);
    div.appendChild(prix);
    div.appendChild(price);
    div.appendChild(desc);
    div.appendChild(description);
    div.appendChild(label);
    div.appendChild(lenses);
    div.appendChild(ajoutPanier)
};