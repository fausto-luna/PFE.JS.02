

//------------------------------- // FASE 1 // -------------------------------//
 var i;
 function showName(){
    document.getElementById('nameId').innerHTML = '';
    var txt = document.getElementById('txtID').value;
    var arrTxt = Array.from(txt);
     for (i = 0; i < arrTxt.length ; i++){
         document.getElementById('nameId').innerHTML += (arrTxt[i] + '<br>');
     }
}

//------------------------------- // FASE 2 // -------------------------------//
function showName2(){
    document.getElementById('nameId2').innerHTML = '';
    var txt = document.getElementById('txtID').value;
    var arrTxt = Array.from(txt);
    let vowels = /[aeiou]/gi;
    let numbers = /[0-9]/;
    let whitespace = /\s/;
    for (var i = 0; i < arrTxt.length ; i++){
         if (arrTxt[i].match(vowels)) {
            document.getElementById('nameId2').innerHTML += 'Found vowel: ' + arrTxt[i] + '<br>';
        }else if (arrTxt[i].match(numbers)){
            document.getElementById('nameId2').innerHTML += 'Found number: ' + arrTxt[i] + '<br>';
        }else if(arrTxt[i].match(whitespace)){
            document.getElementById('nameId2').innerHTML += 'Found a whitespace: ' + '<br>';
        }else{
            document.getElementById('nameId2').innerHTML += 'Found consonant: ' + arrTxt[i] + '<br>';
        }
    }
}
//------------------------------- // FASE 3 // -------------------------------//

//------------------------------- // SOLUTION 1 // -------------------------------//
// let arrName = ['F','A','U','S','T','O','L','U','N','A']
//     let obj = new Map();
//     arrName.map(function(letter) {
//         obj[letter] = (obj[letter] || 0) + 1;
//     });

//------------------------------- // SOLUTION 2 // -------------------------------//
function fase3(){
    document.getElementById('fase3Id').innerHTML = '';
    var txt = document.getElementById('txtID').value;
    var arrTxt = Array.from(txt);
    var letras = new Map();
    arrTxt.map(
        function(letter) {
            if (!letras.has(letter)){
                letras.set(letter,1);
            }else{
                letras.set(letter,letras.get(letter) + 1 ); 
            }
        }
    )
    function display(values,key){  
         document.getElementById('fase3Id').innerHTML += values + ' - ' + key + '<br>';
    }  
    letras.forEach(display);  
}

//------------------------------- // FASE 4 // -------------------------------//
// !! Isma! Aquí si que sigo el enunciado del ejercicio para que tenga sentido.
// es decir, no utilizo "txtID.value" como en las fases anteriores.
function fase4(){
    document.getElementById('fase4Id').innerHTML = '';
    let myName = Array.from('FAUSTO');
    let mySurname = Array.from('LUNA');
    var fullName = myName.concat(' ',mySurname); //concatena elementos de las Arrays indicadas, en una nueva array.
    var x = document.getElementById("fase4Id");
    x.innerHTML = fullName.join('');
}