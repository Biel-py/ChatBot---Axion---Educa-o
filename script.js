const backToTopButton = document.querySelector(".botao_home");

window.addEventListener("scroll", () => {

    if(window.scrollY > 180){
        backToTopButton.style.display = "block";
    } 
    
    else{
        backToTopButton.style.display = "none";
    }
});

backToTopButton.onclick = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};

const temaBtn = document.querySelector(".tema-btn");

temaBtn.onclick = () => {
    document.body.classList.toggle("dark-mode");
};
