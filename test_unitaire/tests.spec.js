let expect = chai.expect;

// Ici nous allons tester notre fonction numStr() avec differentes situations et contextes
describe("Test sur la fonction séparateur de millier numStr()", function() {
  context("Test avec un nombre sans espace", function() {
    it('test avec le nombre 122000', function(){
      let nombre = "122000";
      expect(numStr(nombre)).to.be.equal("122 000");
    });
  });
  context("Test avec un nombre composé de trois chiffres", function() {
    it('test avec le nombre 200', function(){
      let nombre = "200";
      expect(numStr(nombre)).to.be.equal("200");
    });
  });
  context("Test avec le chiffre 0", function() {
    it('test avec le nombre 0', function(){
      let nombre = "0";
      expect(numStr(nombre)).to.be.equal("0");
    });
  });
  context("Test avec un nombre à virgule", function() {
    it('test avec le nombre 122000,23', function(){
      let nombre = "122000,23";
      expect(numStr(nombre)).to.be.equal("122 000,23");
    });
  });
  context("Test avec un nombre qui possède dejà un espace", function() {
    it('test avec le nombre 111 000', function(){
      let nombre = "111 000";
      expect(numStr(nombre)).to.be.equal("111 000");
    });
  });
  context("Test avec un nombre qui possède un séparateur de millier composé d'un point", function() {
    it('test avec le nombre 111.000', function(){
      let nombre = "111.000";
      expect(numStr(nombre)).to.be.equal("111 000");
    });
  });
  context("Test avec un nombre négatif", function() {
    it('test avec le nombre négatif -132000', function(){
      let nombre = "-132000";
      expect(numStr(nombre)).to.be.equal("-132 000");
    });
  });
});