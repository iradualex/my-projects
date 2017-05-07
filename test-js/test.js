// test.js

function executa() {

    var rezultat = 'nici o valoare inca ...'; // initializare variabila

    //-- start program
    //rezultat = 'Salut Radu 123 !';

    var x = parseFloat(prompt("Valoare X", "0")); // introducere valoare x
    var y = parseFloat(prompt("Valoare Y", "0")); // introducere valoare y

    var x2 = Math.pow(x, 2); // variabila x2 calculeaza x la puterea a 2-a
    var y2 = Math.pow(y, 2); // variabila y2 calculeaza y la puterea a 2-a
    var calculare = x2 - y2; // variabila calculare calculeaza x2 - y2

    rezultat =  'X = ' + x + ' ; ' + 'Y = ' + y + ' ; ' + 'Calculare = ' + calculare;
    //-- end program

    //-- afisare finala
    //alert('salut radu');
    document.getElementById('rezultat').innerHTML = 'Rezultatul este: ' + rezultat; // afiseaza rezultat
    //--


/* Tipuri de variabile
var f = 0.3;            // float (numeric)
var i = 4;              // integer (numeric)
var t = 'abc';          // string (text)
var a = {               // array
    'a1': 1,
    'a2': 2
};
*/

} //END FUNCTION