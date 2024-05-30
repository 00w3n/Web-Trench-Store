document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("ir-productos").addEventListener("click", function() {
        const productosOffsetTop = document.querySelector(".productos-lista").offsetTop;
        const scrollPosition = productosOffsetTop - 100;
        window.scrollTo({
            top: scrollPosition,
            behavior: "smooth"
        });
    });

    document.getElementById("contact-form").addEventListener("submit", function(event) {
        event.preventDefault();
        alert("Formulario enviado correctamente!");
    });
});
