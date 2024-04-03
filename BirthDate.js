   function calculerAgeEtNuitsEcoulées() {
    var inputDateNaissance = document.getElementById("BirthDate").value;
    if (!inputDateNaissance) {
        return; // Sortie anticipée si aucune date n'est fournie
    }
    
    var parts = inputDateNaissance.split('-');
    var birthDate = new Date(parts[0], parts[1] - 1, parts[2]);
    var currentDate = new Date();
    
    // Calcul de l'âge
    var age = currentDate.getFullYear() - birthDate.getFullYear();
    var m = currentDate.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && currentDate.getDate() < birthDate.getDate())) {
        age--;
    }
    
    // Calcul du nombre de nuits écoulées
    var oneDay = 24 * 60 * 60 * 1000; // heures*minutes*secondes*millisecondes
    var nightsLived = Math.floor((currentDate - birthDate) / oneDay);
    
    // Mise à jour de l'affichage
    document.getElementById("current-age").innerText = "Niveau " + age;
    document.getElementById("nights-lived").innerText = nightsLived + " points de vie";

        // Mise à jour de la barre de progression pour l'espérance de vie
        var gender = document.getElementById("gender").value;
        var maxLifeExpectancy = (gender === "male") ? 80 : 79; // 80 ans pour un homme, 79 pour une femme
        var lifePercentage = (age / maxLifeExpectancy) * 100;
        
        // S'assurer que le pourcentage ne dépasse pas 100%
        if (lifePercentage > 100) {
            lifePercentage = 100;
        }
        
        // Mise à jour de la barre de progression
        var progressBar = document.querySelector("#esperanceHP .progress-bar");
        progressBar.style.width = lifePercentage + "%";
        progressBar.innerText = lifePercentage.toFixed(0) + "%"; // Arrondi à l'entier le plus proche

}