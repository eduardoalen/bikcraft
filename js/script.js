const links = document.querySelectorAll(".header-menu a");

function ativarLink(link){
    const url = location.href; // window.location: qualquer objeto de window pode ser acessado direto
    const href = link.href;
    if(url.includes(href)) {
        link.classList.add("ativo");
    }
}

links.forEach(ativarLink);