$('.carousel').carousel({
  interval: 10000
});

function envoi() {
 // par défaut, pas d'envoi
 document.diginaliance.action="";
 // recherche de @ dans l'adresse
 var address=window.document.diginaliance.adr.value;
 var pos=address.indexOf("@");
 if (address=="") {
  alert("Vous devez donner une adresse e-mail.");
 }
 else {
  if (pos==-1 || pos==0 || pos==address.length-1) {
   alert("Une adresse e-mail a le format nom@domaine");
  }
  else // tout va bien, on envoie le formulaire
   document.formu.action='mailto:trecy.christine.fournier@gmail.com?subject="message"';
 }
}