function ajouterTache() {
    var input = document.getElementById("taskInput");
    var list = document.getElementById("taskList");
    var texte = input.value;
    if (texte === "") {
        alert("Veuillez écrire une tâche");
        return;
    }
    var li = document.createElement("li");
    var spanTexte = document.createElement("span");
    spanTexte.textContent = texte;
    spanTexte.onclick = function() {
        li.classList.toggle("completed");
    };
    var btnSupprimer = document.createElement("button");
    btnSupprimer.textContent = "Supprimer";
    btnSupprimer.onclick = function() {
        list.removeChild(li);
    };
    li.appendChild(spanTexte);
    li.appendChild(btnSupprimer);
    list.appendChild(li);ة
    input.value = "";
}
