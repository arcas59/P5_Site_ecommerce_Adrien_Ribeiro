// Fonction numStr pour avoir un séparateur de milier en € concernant nos prix
function numStr(nombre, sep) {
  nombre = '' + nombre;
  sep = sep || ' ';
  let c = '',
      d = 0;
  while (nombre.match(/^0[0-9]/)) {
    nombre = nombre.substr(1);
  }
  for (let i = nombre.length-1; i >= 0; i--) {
    c = (d != 0 && d % 3 == 0) ? nombre[i] + sep + c : nombre[i] + c;
    d++;
  }
  return c;
};