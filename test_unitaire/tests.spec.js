/*describe('Array', function () {
  before(function () {
    // ...
  });

  describe('#indexOf()', function () {
    context('when not present', function () {
      it('should not throw an error', function () {
        (function () {
          [1, 2, 3].indexOf(4);
        }.should.not.throw());
      });
      it('should return -1', function () {
        [1, 2, 3].indexOf(4).should.equal(-1);
      });
    });
    context('when present', function () {
      it('should return the index where the element first appears in the array', function () {
        [1, 2, 3].indexOf(3).should.equal(2);
      });
    });
  });
});
*/

describe("Requête serveur"), function() { 
  context("Si il y à 3 objets dans notre serveur", function () {
    it("Il devrait afficher 3 elements dynamiquement", function() { 
      const response = [
      { name: "reflex1",
        imageURL: "test01",
        price: "1"
      }, 
      {
        name: "reflex2",
        imageURL: "test02",
        price: "2"
      }, 
      {
        name: "reflex3",
        imageURL: "test03",
        price: "3"
      }
    ];
      const data = getParsedData(response);
            data.forEach(function (d) {
            const element = createElement(d);
            list.appendChild(element);
            console.log("Retour serveur: ", d);
            });

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
    });
  });

  context("Si il n'y à pas d'objet dans le serveur", function () {
    it("Il devrait afficher aucun elements", function() { 
      const response = {};
      const data = getParsedData(response);
            data.forEach(function (d) {
            const element = createElement(d);
            list.appendChild(element);
            console.log("Retour serveur: ", d);
            });

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
    });
  });

};