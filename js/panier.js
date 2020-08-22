// Affichage des articles qui se trouve dans le panier dans la page panier
  function affichagePanier(){
  
    let data = JSON.parse(localStorage.getItem('panier'));
  
  
  // On enregistre les valeurs du prix total dans une variable à partir du localstorage
    let total = localStorage.getItem('prixTotal');
    console.log("Montant du panier actuellement: ", numStr(total), "€");
    let prixPanier = document.getElementById('total');
  
  // Affichage du prix total du panier si le panier possède un article...Sinon on affiche "votre panier est vide"
    if (total != null) {
      prixPanier.textContent = 'Le montant de votre commande est de : ' + numStr(total) +  ' €';
      prixPanier.id = 'prixTotal'; 
    } else  {
      prixPanier.textContent = 'Le montant de votre commande est de : 0 €';
    }
  
  // Affichage des produits au panier de façon dynamique
    let productContainer = document.getElementById("basket");
  
    if( data == null || total == 0 ) {
      let div = document.createElement('div');
      div.textContent = " Votre panier est vide ";
      console.log(div.textContent);
      basket.appendChild(div);
    } else {
      productContainer.innerHTML = '';
      // On récupere les valeurs dans le localStorage et on les affichent dynamiquement sur la page panier.html
      Object.values(data).map( (reflex) => {
      
        let article = document.createElement('article');
        article.id = "articlePanier";
        let nom = document.createElement('h2');
        nom.textContent = reflex.name;
        let image = document.createElement('img');
        image.src =  reflex.imageUrl;
        image.className = "menu4CSS";
        let div = document.createElement('div');
        div.id = "produit";
        div.className = "paniertxt";
        let quantite = document.createElement('h5');
        div.className = "paniertxt";
        quantite.textContent = 'Quantité: ';
        let qté = document.createElement('h5');
        qté.textContent = reflex.qté;
        let prix = document.createElement('h5');
        prix.textContent = 'Prix: '; 
        let price = document.createElement('h5');
        price.textContent = numStr(reflex.price) + " €";
        price.id = "price";
        let supprime = document.createElement('button');
        supprime.textContent = "supprimer l'article";
        supprime.id = "supprime";

        console.log("Article dans la Panier actuellement: ", nom.textContent);
                 
        // Mise en place des éléments dans le DOM
      
        basket.appendChild(article);  
        article.appendChild(nom);                   
        article.appendChild(image);
        article.appendChild(div);       
        div.appendChild(quantite);
        div.appendChild(qté);
        div.appendChild(prix);
        div.appendChild(price);
        div.appendChild(supprime);  
        
      }); 
    }; 
    // On appelle la fonction "supprimer le produit" dans le container de l'article au panier
    deleteButtons();
  };
  // On appelle la fonction "affichage panier" pour afficher les produits au panier 
  affichagePanier();
  
  // Suppression d'un article du panier
  function deleteButtons() {  
    let deleteButtons = document.querySelectorAll('#supprime');
    let nomProduit;
    let nombreTotalDeProduit = localStorage.getItem('qté');
    nombreTotalDeProduit = parseInt(nombreTotalDeProduit);
    let coutDuPanier = localStorage.getItem("prixTotal");
    coutDuPanier = parseInt(coutDuPanier);
    let data = JSON.parse(localStorage.getItem('panier'));
  
  // On fait une boucle For pour afficher les boutons "supprimer produits" autant de fois qu'il y a un article au panier
    
  for(let i=0; i < deleteButtons.length; i++) {
      deleteButtons[i].addEventListener('click', () => {
        // Récupération du nom de la caméra pour plus tard
        nomProduit = deleteButtons[i].parentElement.parentElement.firstChild.innerText.trim();
        console.log(nomProduit);
        // Récupération du qté de caméras pour calculs de la suppression
        qté = deleteButtons[i].parentElement.children[1].textContent;
        // Conversion du string en number
        qté = parseInt(qté);
        // récupération du prix de la caméra pour calculs de la suppression
        let price = deleteButtons[i].parentElement.children[3].textContent;
         // Conversion du string en number
        price = parseInt(price.split(" ").join(""));
        console.log("envoi du prix: ", price);
        // Calcul de la qté dans le panier après suppression de l'article
        calculQte = nombreTotalDeProduit - qté;
        localStorage.setItem('qté', calculQte);
        // Calcul du prix dans le panier après suppression de l'article
        calculPrice = coutDuPanier - qté * price;
        localStorage.setItem('prixTotal', calculPrice);
        // On supprime la ligne des caméras correspondant au bouton supprimer
        delete data[nomProduit];
  
        // Une petite alerte pour dire qu'un article à été supprimé.
        alert('Vous avez supprimé '+ nomProduit + ' de votre panier ! ')
        // On actualise le LocalStorage et recharge la page pour une mise a jour
        localStorage.setItem('panier', JSON.stringify(data));
        window.location.reload();
      
        affichagePanier();
        chargementPanier(); 
       });
      }; 
  };
  
  // Requete finale de commande contenant les informations de contact et les Id produit
  let formValid = document.getElementById('valider');
  formValid.addEventListener ('click', achat);
  
  function achat() {
  
  // Integration d'une alerte si le panier est vide, on ne peut pas passer commande  
    let panier = localStorage.getItem('panier');
    panier = JSON.parse(panier);
    let total = localStorage.getItem('prixTotal');
  if (panier == null || total == 0){
    alert("Votre panier est vide, vous ne pouvez pas passer une commande ! ")
   };

  // On déclare un tableau de produits pour la requete POST plus tard
   let products = [];
  
   // On fait une fonction pour récupérer les id des produits au panier, pour l'afficher dans la requete POST
   function productId(products) {
    let panier = JSON.parse(localStorage.getItem('panier'));
    
    products = Object.values(panier).map( (data) => {
      let qté = parseInt(data.qté);
      console.log(typeof qté);
      console.log(qté);
      
      for (let i = 0 ; i< qté ; i ++){
          products.push(data._id);  
        }
         console.log(products); 
        return products; 
       });
   
    };
    productId(products);
    
      // Récupérer la valeur des champs saisis par le client
       
      let firstName = document.getElementById('firstname').value;
      let lastName = document.getElementById('name').value;
      let email = document.getElementById('email').value;
      let address = document.getElementById('address').value;
      let city = document.getElementById('city').value;
  
    // On met les valeurs dans un objet pour la requete POST
    
      let contact = {
          "firstName": firstName,
          "lastName": lastName,
          "email": email,
          "address": address,
          "city": city,
      };
  
  // Création de l'objet obligatoire pour la requete à envoyer au serveur
    let objt = {
      contact,
      products
    };
  
    let achat = JSON.stringify(objt);
   // Console.log(achat);
   // Console.log(products);
    
    // Afficher une alerte si il manque un renseignement et enregistrer les données dans le localStorage
    let prenom = document.getElementById('firstname');
    let oublisPrenom = document.getElementById('oublisPrenom');
    let prenomValid = /^[a-zA-Z ,.'-]+$/;
  
    let nom = document.getElementById('name');
    let oublisNom = document.getElementById('oublisNom');
    let nomValid = /^[a-zA-Z ,.'-]+$/;
  
    let mail = document.getElementById('email');
    let oublisEmail = document.getElementById('oublisEmail');
    let mailValid = /^[\w\-\+]+(\.[\w\-]+)*@[\w\-]+(\.[\w\-]+)*\.[\w\-]{2,4}$/;
  
    let adresse = document.getElementById('address');
    let oublisAdress = document.getElementById('oublisAdress');
    let adresseValid = /[0-9a-zA-Z]{1,3}[a-z ,.'-]+$/;
  
    let ville = document.getElementById('city');
    let oublisVille = document.getElementById('oublisVille');
    let villeValid = /^^[a-zA-Z ,.'-]+$/;
  
    if (prenomValid.test(prenom.value) == false){
      oublisPrenom.textContent = "Merci d'indiquer votre prénom correctement";
      oublisPrenom.style.color = 'red';
      return event.preventDefault();
  
    } else if (nomValid.test(nom.value) == false){
      oublisNom.textContent = "Merci d'indiquer votre nom correctement";
      oublisNom.style.color = 'red';
      return event.preventDefault();
  
    } else if (mailValid.test(mail.value) == false){
      oublisEmail.textContent = "Votre e-mail est invalide";
      oublisEmail.style.color = 'red';
      return event.preventDefault();
  
    } else if (adresseValid.test(adresse.value) == false){
      oublisAdress.textContent = "Merci d'indiquer votre adresse correctement";
      oublisAdress.style.color = 'red';
      return event.preventDefault();
  
    } else if (villeValid.test(ville.value) == false){
      oublisVille.textContent = "Merci d'indiquer votre ville correctement";
      oublisVille.style.color = 'red';
      return event.preventDefault();
  
    } else if (panier == null || total == 0){
      return event.preventDefault();
   
    } else {
    // Si tout à été bien rempli, on envoi la commande au serveur, avec toutes les coordonnées du client
    let request = new XMLHttpRequest();
         request.onreadystatechange = function () {
           if (this.readyState == XMLHttpRequest.DONE) {
             let confirmation = JSON.parse(this.responseText);
             localStorage.setItem('order', JSON.stringify(confirmation));
             let prix = JSON.parse(localStorage.getItem('prixTotal'));
             localStorage.setItem('prix', JSON.stringify(prix));
             console.log(typeof prix);
             console.log( prix);
             // Des que la requete est envoyé, on bascule sur la page de confirmation de commande avec toutes les infos demandé : Id de commande, prix du panier
             window.location.href = "commande.html";
           }
         };
    request.open("post", "http://localhost:3000/api/cameras/order");
    request.setRequestHeader("Content-Type", "application/json");
    request.send(achat);
  }
  
  };