import { termekekLISTA } from "./adat.js";
import { termekekOsszeallit, megjelenit } from "./listaMegjelenit.js";
import { rendezArSzerint, rendezNevSzerint } from "./adatkezelo.js";

const termekELEM = $("#termekek");
termekELEM.html(termekekOsszeallit(termekekLISTA));

const KOSAR = []
const kosarba = $(".kosar")

const divELEM = $("#termekek")
divELEM.html(megjelenit(termekekLISTA))

let irany = 1;
init(termekekLISTA);

function init(lista) {
    rendezEsemeny();
    torolEsemeny();
    kosarEsemeny();
}

function rendezEsemeny(lista) {
  const nevELEM = $("#rendezes_nev");
  const arELEM = $("#rendezes_ar");

  nevELEM.on("click", function () {
      const rLista = rendezNevSzerint(lista.slice(), irany);
      termekELEM.html(termekekOsszeallit(rLista));
      irany *= -1;
  });

  arELEM.on("click", function () {
      const rLista = rendezArSzerint(lista.slice(), irany);
      termekELEM.html(termekekOsszeallit(rLista));
      irany *= -1;
  });
}

function kosarEsemeny() {
  const gombELEM = $(".gomb")
  gombELEM.on("click", function (event) {
  const id = event.target.id 
  KOSAR.push(termekekLISTA[id])
  kosarba.html(termekekOsszeallit(KOSAR))
  torolEsemeny();
  });
}

function torolEsemeny() {
    const torolGOMB = $(".torol");
    torolGOMB.on("click", function (event) {
      let id = event.target.id;
      console.log(id);
      const LISTA = torol(termekekLISTA, id);
      init(LISTA);
    });
}