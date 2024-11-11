document.addEventListener('DOMContentLoaded', function() {
    // Seleciona o link "Usuários"
    const userMenu = document.querySelector('.nav__link > a[href="#"]');
    const dropdown = userMenu.nextElementSibling;

    // Adiciona o evento de clique
    userMenu.addEventListener('click', function(event) {
        event.preventDefault(); // Impede o redirecionamento do link
        dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
    });

    // Fecha o dropdown ao clicar fora dele
    document.addEventListener('click', function(event) {
        if (!userMenu.contains(event.target) && !dropdown.contains(event.target)) {
            dropdown.style.display = 'none';
        }
    });
});