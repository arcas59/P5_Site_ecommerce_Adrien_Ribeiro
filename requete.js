// Debut Appareil Photo index -------------------------------------------------------

var requestIndNom1 = new XMLHttpRequest();
requestIndNom1.onreadystatechange = function() {
    if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
        var response = JSON.parse(this.responseText);
        document.getElementById("innerIndNom1").innerHTML = response[0]["name"];
    }
};
requestIndNom1.open("GET", "http://localhost:3000/api/cameras", true);
requestIndNom1.send();

var requestIndNom2 = new XMLHttpRequest();
requestIndNom2.onreadystatechange = function() {
    if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
        var response = JSON.parse(this.responseText);
        document.getElementById("innerIndNom2").innerHTML = response[1]["name"];
    }
};
requestIndNom2.open("GET", "http://localhost:3000/api/cameras", true);
requestIndNom2.send();

var requestIndNom3 = new XMLHttpRequest();
requestIndNom3.onreadystatechange = function() {
    if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
        var response = JSON.parse(this.responseText);
        document.getElementById("innerIndNom3").innerHTML = response[2]["name"];
    }
};
requestIndNom3.open("GET", "http://localhost:3000/api/cameras", true);
requestIndNom3.send();

var requestIndNom4 = new XMLHttpRequest();
requestIndNom4.onreadystatechange = function() {
    if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
        var response = JSON.parse(this.responseText);
        document.getElementById("innerIndNom4").innerHTML = response[3]["name"];
    }
};
requestIndNom4.open("GET", "http://localhost:3000/api/cameras", true);
requestIndNom4.send();

var requestIndNom5 = new XMLHttpRequest();
requestIndNom5.onreadystatechange = function() {
    if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
        var response = JSON.parse(this.responseText);
        document.getElementById("innerIndNom5").innerHTML = response[4]["name"];
    }
};
requestIndNom5.open("GET", "http://localhost:3000/api/cameras", true);
requestIndNom5.send();

// Fin Appareil Photo index ---------------------------------------------------------


// Début Appareil Photo 1 -----------------------------------------------------------

var requestImg1 = new XMLHttpRequest();
requestImg1.onreadystatechange = function() {
    if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
        var response = JSON.parse(this.response);
        document.getElementById("innerImg1").innerHTML = response[0]["imageUrl"];
    }
};
requestImg1.open("GET", "http://localhost:3000/api/cameras", true);
requestImg1.send();

var requestNom1 = new XMLHttpRequest();
requestNom1.onreadystatechange = function() {
    if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
        var response = JSON.parse(this.responseText);
        document.getElementById("innerNom1").innerHTML = response[0]["name"];
    }
};
requestNom1.open("GET", "http://localhost:3000/api/cameras", true);
requestNom1.send();

var requestNom11 = new XMLHttpRequest();
requestNom11.onreadystatechange = function() {
    if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
        var response = JSON.parse(this.responseText);
        document.getElementById("innerNom11").innerHTML = response[0]["name"];
    }
};
requestNom11.open("GET", "http://localhost:3000/api/cameras", true);
requestNom11.send();

var requestDes1 = new XMLHttpRequest();
requestDes1.onreadystatechange = function() {
    if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
        var response = JSON.parse(this.responseText);
        document.getElementById("innerDes1").innerHTML = response[0]["description"];
    }
};
requestDes1.open("GET", "http://localhost:3000/api/cameras", true);
requestDes1.send();

var requestPrix1 = new XMLHttpRequest();
requestPrix1.onreadystatechange = function() {
    if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
        var response = JSON.parse(this.responseText);
        document.getElementById("innerPri1").innerHTML = response[0]["price"];
    }
};
requestPrix1.open("GET", "http://localhost:3000/api/cameras", true);
requestPrix1.send();

var requestId1 = new XMLHttpRequest();
requestId1.onreadystatechange = function() {
    if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
        var response = JSON.parse(this.responseText);
        document.getElementById("innerId1").innerHTML = response[0]["_id"];
    }
};
requestId1.open("GET", "http://localhost:3000/api/cameras", true);
requestId1.send();

var requestOptique10 = new XMLHttpRequest();
requestOptique10.onreadystatechange = function() {
    if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
        var response = JSON.parse(this.responseText);
        document.getElementById("innerOpt10").innerHTML = response[0]["lenses"][0];
    }
};
requestOptique10.open("GET", "http://localhost:3000/api/cameras", true);
requestOptique10.send();

var requestOptique11 = new XMLHttpRequest();
requestOptique11.onreadystatechange = function() {
    if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
        var response = JSON.parse(this.responseText);
        document.getElementById("innerOpt11").innerHTML = response[0]["lenses"][1];
    }
};
requestOptique11.open("GET", "http://localhost:3000/api/cameras", true);
requestOptique11.send();

// Fin Appareil Photo 1 ----------------------------------------------------------

// Debut Appareil Photo 2 --------------------------------------------------------

var requestNom2 = new XMLHttpRequest();
requestNom2.onreadystatechange = function() {
    if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
        var response = JSON.parse(this.responseText);
        document.getElementById("innerNom2").innerHTML = response[1]["name"];
    }
};
requestNom2.open("GET", "http://localhost:3000/api/cameras", true);
requestNom2.send();

var requestNom21 = new XMLHttpRequest();
requestNom21.onreadystatechange = function() {
    if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
        var response = JSON.parse(this.responseText);
        document.getElementById("innerNom21").innerHTML = response[1]["name"];
    }
};
requestNom21.open("GET", "http://localhost:3000/api/cameras", true);
requestNom21.send();

var requestDes2 = new XMLHttpRequest();
requestDes2.onreadystatechange = function() {
    if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
        var response = JSON.parse(this.responseText);
        document.getElementById("innerDes2").innerHTML = response[1]["description"];
    }
};
requestDes2.open("GET", "http://localhost:3000/api/cameras", true);
requestDes2.send();

var requestPrix2 = new XMLHttpRequest();
requestPrix2.onreadystatechange = function() {
    if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
        var response = JSON.parse(this.responseText);
        document.getElementById("innerPri2").innerHTML = response[1]["price"];
    }
};
requestPrix2.open("GET", "http://localhost:3000/api/cameras", true);
requestPrix2.send();

var requestId2 = new XMLHttpRequest();
requestId2.onreadystatechange = function() {
    if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
        var response = JSON.parse(this.responseText);
        document.getElementById("innerId2").innerHTML = response[1]["_id"];
    }
};
requestId2.open("GET", "http://localhost:3000/api/cameras", true);
requestId2.send();

var requestOptique20 = new XMLHttpRequest();
requestOptique20.onreadystatechange = function() {
    if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
        var response = JSON.parse(this.responseText);
        document.getElementById("innerOpt20").innerHTML = response[1]["lenses"][0];
    }
};
requestOptique20.open("GET", "http://localhost:3000/api/cameras", true);
requestOptique20.send();

var requestOptique21 = new XMLHttpRequest();
requestOptique21.onreadystatechange = function() {
    if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
        var response = JSON.parse(this.responseText);
        document.getElementById("innerOpt21").innerHTML = response[1]["lenses"][1];
    }
};
requestOptique21.open("GET", "http://localhost:3000/api/cameras", true);
requestOptique21.send();

var requestOptique22 = new XMLHttpRequest();
requestOptique22.onreadystatechange = function() {
    if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
        var response = JSON.parse(this.responseText);
        document.getElementById("innerOpt22").innerHTML = response[1]["lenses"][2];
    }
};
requestOptique22.open("GET", "http://localhost:3000/api/cameras", true);
requestOptique22.send();

// Fin Appareil Photo 2 -------------------------------------------------------------

// Debut Appareil Photo 3 -----------------------------------------------------------

var requestNom3 = new XMLHttpRequest();
requestNom3.onreadystatechange = function() {
    if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
        var response = JSON.parse(this.responseText);
        document.getElementById("innerNom3").innerHTML = response[2]["name"];
    }
};
requestNom3.open("GET", "http://localhost:3000/api/cameras", true);
requestNom3.send();

var requestNom31 = new XMLHttpRequest();
requestNom31.onreadystatechange = function() {
    if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
        var response = JSON.parse(this.responseText);
        document.getElementById("innerNom31").innerHTML = response[2]["name"];
    }
};
requestNom31.open("GET", "http://localhost:3000/api/cameras", true);
requestNom31.send();

var requestDes3 = new XMLHttpRequest();
requestDes3.onreadystatechange = function() {
    if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
        var response = JSON.parse(this.responseText);
        document.getElementById("innerDes3").innerHTML = response[2]["description"];
    }
};
requestDes3.open("GET", "http://localhost:3000/api/cameras", true);
requestDes3.send();

var requestPrix3 = new XMLHttpRequest();
requestPrix3.onreadystatechange = function() {
    if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
        var response = JSON.parse(this.responseText);
        document.getElementById("innerPri3").innerHTML = response[2]["price"];
    }
};
requestPrix3.open("GET", "http://localhost:3000/api/cameras", true);
requestPrix3.send();

var requestId3 = new XMLHttpRequest();
requestId3.onreadystatechange = function() {
    if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
        var response = JSON.parse(this.responseText);
        document.getElementById("innerId3").innerHTML = response[2]["_id"];
    }
};
requestId3.open("GET", "http://localhost:3000/api/cameras", true);
requestId3.send();

var requestOptique30 = new XMLHttpRequest();
requestOptique30.onreadystatechange = function() {
    if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
        var response = JSON.parse(this.responseText);
        document.getElementById("innerOpt30").innerHTML = response[2]["lenses"][0];
    }
};
requestOptique30.open("GET", "http://localhost:3000/api/cameras", true);
requestOptique30.send();

// Fin Appareil Photo 3 -------------------------------------------------------------

// Debut Appareil Photo 4 -----------------------------------------------------------

var requestNom4 = new XMLHttpRequest();
requestNom4.onreadystatechange = function() {
    if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
        var response = JSON.parse(this.responseText);
        document.getElementById("innerNom4").innerHTML = response[3]["name"];
    }
};
requestNom4.open("GET", "http://localhost:3000/api/cameras", true);
requestNom4.send();

var requestNom41 = new XMLHttpRequest();
requestNom41.onreadystatechange = function() {
    if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
        var response = JSON.parse(this.responseText);
        document.getElementById("innerNom41").innerHTML = response[3]["name"];
    }
};
requestNom41.open("GET", "http://localhost:3000/api/cameras", true);
requestNom41.send();

var requestDes4 = new XMLHttpRequest();
requestDes4.onreadystatechange = function() {
    if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
        var response = JSON.parse(this.responseText);
        document.getElementById("innerDes4").innerHTML = response[3]["description"];
    }
};
requestDes4.open("GET", "http://localhost:3000/api/cameras", true);
requestDes4.send();

var requestPrix4 = new XMLHttpRequest();
requestPrix4.onreadystatechange = function() {
    if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
        var response = JSON.parse(this.responseText);
        document.getElementById("innerPri4").innerHTML = response[3]["price"];
    }
};
requestPrix4.open("GET", "http://localhost:3000/api/cameras", true);
requestPrix4.send();

var requestId4 = new XMLHttpRequest();
requestId4.onreadystatechange = function() {
    if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
        var response = JSON.parse(this.responseText);
        document.getElementById("innerId4").innerHTML = response[3]["_id"];
    }
};
requestId4.open("GET", "http://localhost:3000/api/cameras", true);
requestId4.send();

var requestOptique40 = new XMLHttpRequest();
requestOptique40.onreadystatechange = function() {
    if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
        var response = JSON.parse(this.responseText);
        document.getElementById("innerOpt40").innerHTML = response[3]["lenses"][0];
    }
};
requestOptique40.open("GET", "http://localhost:3000/api/cameras", true);
requestOptique40.send();

var requestOptique41 = new XMLHttpRequest();
requestOptique41.onreadystatechange = function() {
    if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
        var response = JSON.parse(this.responseText);
        document.getElementById("innerOpt41").innerHTML = response[3]["lenses"][1];
    }
};
requestOptique41.open("GET", "http://localhost:3000/api/cameras", true);
requestOptique41.send();

// Fin Appareil Photo 4 -------------------------------------------------------------

// Debut Appareil Photo 5 -----------------------------------------------------------

var requestNom5 = new XMLHttpRequest();
requestNom5.onreadystatechange = function() {
    if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
        var response = JSON.parse(this.responseText);
        document.getElementById("innerNom5").innerHTML = response[4]["name"];
    }
};
requestNom5.open("GET", "http://localhost:3000/api/cameras", true);
requestNom5.send();

var requestNom51 = new XMLHttpRequest();
requestNom51.onreadystatechange = function() {
    if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
        var response = JSON.parse(this.responseText);
        document.getElementById("innerNom51").innerHTML = response[4]["name"];
    }
};
requestNom51.open("GET", "http://localhost:3000/api/cameras", true);
requestNom51.send();

var requestDes5 = new XMLHttpRequest();
requestDes5.onreadystatechange = function() {
    if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
        var response = JSON.parse(this.responseText);
        document.getElementById("innerDes5").innerHTML = response[4]["description"];
    }
};
requestDes5.open("GET", "http://localhost:3000/api/cameras", true);
requestDes5.send();

var requestPrix5 = new XMLHttpRequest();
requestPrix5.onreadystatechange = function() {
    if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
        var response = JSON.parse(this.responseText);
        document.getElementById("innerPri5").innerHTML = response[4]["price"];
    }
};
requestPrix5.open("GET", "http://localhost:3000/api/cameras", true);
requestPrix5.send();

var requestId5 = new XMLHttpRequest();
requestId5.onreadystatechange = function() {
    if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
        var response = JSON.parse(this.responseText);
        document.getElementById("innerId5").innerHTML = response[4]["_id"];
    }
};
requestId5.open("GET", "http://localhost:3000/api/cameras", true);
requestId5.send();

var requestOptique50 = new XMLHttpRequest();
requestOptique50.onreadystatechange = function() {
    if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
        var response = JSON.parse(this.responseText);
        document.getElementById("innerOpt50").innerHTML = response[4]["lenses"][0];
    }
};
requestOptique50.open("GET", "http://localhost:3000/api/cameras", true);
requestOptique50.send();

var requestOptique51 = new XMLHttpRequest();
requestOptique51.onreadystatechange = function() {
    if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
        var response = JSON.parse(this.responseText);
        document.getElementById("innerOpt51").innerHTML = response[4]["lenses"][1];
    }
};
requestOptique51.open("GET", "http://localhost:3000/api/cameras", true);
requestOptique51.send();

var requestOptique52 = new XMLHttpRequest();
requestOptique52.onreadystatechange = function() {
    if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
        var response = JSON.parse(this.responseText);
        document.getElementById("innerOpt52").innerHTML = response[4]["lenses"][2];
    }
};
requestOptique52.open("GET", "http://localhost:3000/api/cameras", true);
requestOptique52.send();

// Fin Appareil Photo 5 -------------------------------------------------------------

// Debut Page Panier ----------------------------------------------------------------

function LignePanier (code, qte, prix)
{
    this.codeArticle = code;
    this.qteArticle = qte;
    this.prixArticle = prix;
    this.ajouterQte = function(qte)
    {
        this.qteArticle += qte;
    }
    this.getPrixLigne = function()
    {
        var resultat = this.prixArticle * this.qteArticle;
        return resultat;
    }
    this.getCode = function() 
    {
        return this.codeArticle;
    }
}

function Panier()
{
    this.liste = [];
    this.ajouterArticle = function(code, qte, prix)
    { 
        var index = this.getArticle(code);
        if (index == -1) this.liste.push(new LignePanier(code, qte, prix));
        else this.liste[index].ajouterQte(qte);
    }
    this.getPrixPanier = function()
    {
        var total = 0;
        for(var i = 0 ; i < this.liste.length ; i++)
            total += this.liste[i].getPrixLigne();
        return total;
    }
    this.getArticle = function(code)
    {
        for(var i = 0 ; i <this.liste.length ; i++)
            if (code == this.liste[i].getCode()) return i;
        return -1;
    }
    this.supprimerArticle = function(code)
    {
        var index = this.getArticle(code);
        if (index > -1) this.liste.splice(index, 1);
    }
}
