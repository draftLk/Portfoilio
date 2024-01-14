if (window.SimpleAnime) {
  new SimpleAnime();
}

// SCROLL ANIMADO

const section = document.querySelector('[data-scrollanime=""]');
const windowMetade = window.innerHeight * 0.6;

function activeScrollAnimado() {
  const sectionTop = section.getBoundingClientRect().top - windowMetade;
  if (sectionTop < 0) {
    section.classList.add("ativo");
  } else {
    section.classList.remove("ativo");
  }
}

window.addEventListener("scroll", activeScrollAnimado);
