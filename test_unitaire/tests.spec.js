describe('Array', function () {
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