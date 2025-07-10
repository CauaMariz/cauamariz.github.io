let campoShowLink = document.querySelector("#campoShowLink");
let img1Banner = document.querySelector("#img1Banner");

img1Banner.addEventListener("mousemove", () => {
  setTimeout(() => {
    campoShowLink.classList.add("showCampoLink");
    campoShowLink.innerHTML = `Projeto feito com API da NASA. Clique 
      <a href="http://github.com/CauaMariz/PROJETOS-JS-CSS-HTML-PHP/tree/main/Projeto-API-PHP" target="_blank">
        Aqui
      </a> 
      para acessar ou na imagem do banner.`;
  }, 500);
});

img1Banner.addEventListener("mouseout", () => {
  setTimeout(() => {
    campoShowLink.classList.remove("showCampoLink");
  campoShowLink.innerHTML = "";
  } , 5000)
});
