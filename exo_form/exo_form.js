
/*function conca(){
    const nom = document.getElementsByName("nom").value;
    const prenom = document.getElementsByName("prenom").value;
    var conc = nom + prenom;
    document.getElementById("result") = conc;
    console.log("result");
}*/
 formu[2].onclick = function conca(){
    formu.result.value = formu[0].value +" "+ formu[1].value
}
