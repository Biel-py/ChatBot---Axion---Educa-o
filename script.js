/* Ir para o topo */
const backToTopButton = document.querySelector(".botao_home");

window.addEventListener("scroll", () => {

    if (window.scrollY > 250) {

        backToTopButton.classList.add("mostrar");

    } else {

        backToTopButton.classList.remove("mostrar");
    }
});

/* voltar suavemente */

backToTopButton.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

/* =========================
   DARK MODE
========================= */

const temaBtn = document.querySelector(".tema-btn");
const iconeTema = temaBtn.querySelector("i");

/* verifica se o usuário já ativou anteriormente */

if(localStorage.getItem("tema") === "escuro"){

    document.body.classList.add("dark-mode");

    iconeTema.classList.remove("fa-moon");
    iconeTema.classList.add("fa-sun");
}

/*tema*/

temaBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    /* salva preferência */

    if(document.body.classList.contains("dark-mode")){

        localStorage.setItem("tema", "escuro");

        iconeTema.classList.remove("fa-moon");
        iconeTema.classList.add("fa-sun");

    } else {

        localStorage.setItem("tema", "claro");

        iconeTema.classList.remove("fa-sun");
        iconeTema.classList.add("fa-moon");
    }

});


/* =========================
   ANIMAÇÃO AO ROLAR
========================= */

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", revelarSection);

function revelarSection(){

    const triggerBottom = window.innerHeight * 0.85;

    sections.forEach((section) => {

        const sectionTop = section.getBoundingClientRect().top;

        if(sectionTop < triggerBottom){

            section.classList.add("show");

        }
    });
}

/* =========================
   INVESTIMENTOS
========================= */

const carousel = document.getElementById("carrosel");

const scrollAmount = 340;

document.querySelector(".next").addEventListener("click", () => {
  carousel.scrollBy({
    left: scrollAmount,
    behavior: "smooth"
  });
});

document.querySelector(".prev").addEventListener("click", () => {
  carousel.scrollBy({
    left: -scrollAmount,
    behavior: "smooth"
  });
});
revelarSection();