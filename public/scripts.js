const cards = document.querySelectorAll('.card')

for (let card of cards) {
    card.addEventListener("click", function() {
        const paginaId = card.getAttribute('id')

        if (paginaId == "starter") {
            window.location.href = `/rocketseat/dashboard/${paginaId}`
        } else if (paginaId == "launchbase" || paginaId == "gostack") {
            window.location.href = "https://rocketseat.com.br/"
        }
        
    })
}