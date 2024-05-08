import { termekekLISTA } from "./adat.js";
import { termekekOsszeallit, megjelenit } from "./listaMegjelenit.js";
import { rendezArSzerint, rendezNevSzerint } from "./adatkezelo.js";
const termekElem = $("#termekek");
termekElem.html(termekOsszeallit(TASKALISTA));

const KOSAR = []
const kosarba = $("#gomb")

const divELEM = $("#termekek")
divELEM.html(megjelenit(termekekLISTA))

let irany = 1;
init(termekekLISTA);

function init(lista) {
    megjelenit(htmlOsszeallit(lista));
    rendezEsemeny();
    torolEsemeny();
    kosarEsemeny();

}

function rendezEsemeny(lista) {
  const nevElem = $("#rendezes_nev");
  const arElem = $("#rendezes_ar");

  nevElem.on("click", function () {
      const rLista = nevRendez(lista.slice(), irany);
      termekElem.html(termekekOsszeallit(rLista));
      irany *= -1;
  });

  arElem.on("click", function () {
      const rLista = rendezArSzerint(lista.slice(), irany);
      termekElem.html(termekekOsszeallit(rLista));
      irany *= -1;
  });
}

function kosarEsemeny() {
  const gombElem = $(".gomb")
  gombElem.on("click", function (event) {
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
