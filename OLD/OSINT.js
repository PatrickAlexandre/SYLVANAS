 function search() {
  var input = document.getElementById('queryInput').value.trim();
  var baseUrl = 'https://epieos.com/?q=';
  var queryType = '';
  var finalUrl = '';

  // Vérifie si l'entrée est vide
  if(!input) {
    console.log('Erreur: Le champ de recherche est vide.');
    alert('Veuillez entrer une adresse email ou un numéro de téléphone.');
    return; // Arrête l'exécution de la fonction
  }

  // Vérifie si l'entrée est un email ou un numéro de téléphone
  if(input.includes('@')) {
    // C'est probablement un email
    queryType = '&t=email';
    console.log('Type de recherche détecté: Email');
  } else if(input.match(/^\+?\d+$/)) {
    // On suppose que c'est un numéro de téléphone valide
    input = encodeURIComponent(input);
    queryType = '&t=phone';
    console.log('Type de recherche détecté: Téléphone');
  } else {
    // Si l'entrée n'est ni un email valide ni un numéro de téléphone valide
    console.log('Erreur: L\'entrée n\'est ni un email valide ni un numéro de téléphone valide.');
    alert('Veuillez entrer une adresse email valide ou un numéro de téléphone valide.');
    return; // Arrête l'exécution de la fonction
  }

  // Construit l'URL finale
  finalUrl = baseUrl + input + queryType;
  console.log('URL finale:', finalUrl);

  // Redirige l'utilisateur vers l'URL
  window.location.href = finalUrl;
}