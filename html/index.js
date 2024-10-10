document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const firstNameInput = document.getElementById("first-name");
    const lastNameInput = document.getElementById("last-name");
    const messageInput = document.getElementById("message");
    const commentList = document.getElementById("comment-list");
    const errorMessage = document.getElementById("error-message");

    form.addEventListener("submit", function (e) {
      e.preventDefault();

      // Récupérer les informations données
      const firstName = firstNameInput.value.trim();
      const lastName = lastNameInput.value.trim();
      const message = messageInput.value.trim();

      // Vérification que tous les champs sont remplis
      if (firstName === "" || lastName === "" || message === "") {
        errorMessage.style.display = "block";
      } else {
        // Cacher le message d'erreur si tout est rempli
        errorMessage.style.display = "none";

        // Créer un nouveau commentaire avec les informations du formulaires
        const newComment = document.createElement("div");
        newComment.classList.add("flex", "space-x-4", "text-sm", "text-gray-500");
        newComment.innerHTML = `
          <div class="flex-1 py-10 border-t border-gray-200">
            <h3 class="font-medium text-gray-900">${firstName} ${lastName}</h3>
            <div class="prose prose-sm mt-4 max-w-none text-gray-500">
              <p>${message}</p>
            </div>
          </div>
        `;

        // Ajouter le nouveau commentaire à la liste
        commentList.appendChild(newComment);

        // Réinitialiser le formulaire
        form.reset();
      }
    });
  });

