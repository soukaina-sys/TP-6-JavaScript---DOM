let maDiv = document.createElement("div"); 
let monParagraphe = document.createElement("p"); 
monParagraphe.innerText = "Ceci est un paragraphe"; 
maDiv.appendChild(monParagraphe); 
document.body.appendChild(maDiv); 
monParagraphe.innerText = "Le texte a été modifié"; 
monParagraphe.style.backgroundColor = "lightblue"; 
monParagraphe.style.textAlign = "center"; 
maDiv.onclick = function() {
    monParagraphe.innerText = "Un clic a été détecté";
};
