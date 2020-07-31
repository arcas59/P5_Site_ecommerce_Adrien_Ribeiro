var btn = document.querySelector('.pan1');
var panNom1 = document.querySelector('.nomm1')
var panPrix1 = document.querySelector('.prixx1')


btn.addEventListener('click', updateBtn);

function updateBtn() {
  if (btn.value === "Ajouter l'article au panier") {
    btn.value = "Retirer l'article du panier";
    panNom1.innerHTML = "Zurss 50S";
    panPrix1.innerHTML = "49900";
  } else {
    btn.value = "Ajouter l'article au panier";
    panNom1.value = "";
    panPrix1 = "";
  }
}
