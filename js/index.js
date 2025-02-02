// Exemplo de interação com JavaScript
document.addEventListener('DOMContentLoaded', function() {
    console.log('Página carregada!');
    // Aqui você pode adicionar mais interações se necessário
});
// Inicializa AOS (Animate On Scroll)
AOS.init({
    duration: 1000, // Duração da animação
    once: true, // Anima apenas uma vez
});

// Scroll suave para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
// Captura o formulário de contato
const contactForm = document.getElementById('contactForm');

// Adiciona um evento de "submit" ao formulário
contactForm.addEventListener('submit', function (e) {
    e.preventDefault(); // Impede o envio padrão do formulário

    // Captura os valores dos campos
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Exibe os dados no console (para teste)
    console.log('Nome:', name);
    console.log('E-mail:', email);
    console.log('Mensagem:', message);

    // Limpa o formulário após o envio
    contactForm.reset();

    // Exibe uma mensagem de sucesso para o usuário
    alert('Mensagem enviada com sucesso!');
});