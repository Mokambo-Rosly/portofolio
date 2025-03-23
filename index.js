document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let prenom = document.getElementById("prenom").value.trim();
    let nom = document.getElementById("nom").value.trim();
    let sujet = document.getElementById("sujet").value.trim();
    let message = document.getElementById("message").value.trim();

    if (prenom === "" || nom === "" || sujet === "" || message === "") {
        alert("Veuillez remplir tous les champs.");
    } else {
        alert("Message envoyé avec succès !");
        this.reset();
    }
});
