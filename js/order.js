// Affichage du numéro de commande avec message de remerciement

function commande(){

  let data = JSON.parse(localStorage.getItem('order'));
  let prix = JSON.parse(localStorage.getItem('prix'));

  let productContainer = document.getElementById("recap");

  // Création du message de confirmation de commande

  if( data != null ) {
      productContainer.innerHTML = '';
      // On récupere les données dans l'objet order de la commande dans le LocalStorage
      Object.values(data).map( () => {

          // Et on affiche le message de confirmation avec les données récupérées
          productContainer.innerHTML = 
          `<p>Orinoco vous remercie pour votre achat.</p>
          <p>Votre commande a été enregistrée sous le numéro : <span class="gras"> ${data.orderId}</span>,
          pour un montant total de <span class="gras">${numStr(prix)} €</span>.
          </p>
              
          <p>Vous recevrez par mail votre numéro de suivi colissimo.<br><br>
          
          <span class="abientot"> A BIENTÔT </span>`   
      });    
  } 
}
// Remise à zero du localStorage grace au bouton "retour a l'accueil du site" et retour a index.html
function retour(){
  localStorage.clear();
}
commande();