import { termekekLISTA } from "./adat.js";
import { termekekOsszeallit, megjelenit } from "./listaMegjelenit.js";

termekekOsszeallit(termekekLISTA);

//const tablazatELEM = $(".adatok")
//tablazatELEM.html(termekekOsszeallit(lista));

/* kosár megjelenítése: */
const KOSAR = []
//const kosarbaGOMB = ();

function init(lista) {
    megjelenit(htmlOsszeallit(lista));
    rendezEsemeny();
    torolEsemeny();
}

function rendezEsemeny() {
    /* a függvény akkor fut le, ha a táblázat név fejlécére kattintunk. */
    const termekELEM = $(".adatok table th").eq(0);
    termekELEM.on("click", function () {
      const rLISTA = rendez(termekekLISTA, irany);
      console.log(rLISTA);
      init(rLISTA);
      irany *= -1;
    });
}

function szuresEsemeny() {
    /* akkor kell lefutnia, ha megváltozik a keresőmező tartalma */
    const keresoELEM = $("#szuro");
    keresoELEM.on("keyup", function () {
      let keresoSzoveg = keresoELEM.val();
      const szLISTA = szures(termekekLISTA, keresoSzoveg);
      init(szLISTA);
    });
}

function torolEsemeny() {
    /* Akkor fog lefutni, ha sor melletti torol gombra kattintunk. */
    const torolGOMB = $(".torol");
    torolGOMB.on("click", function (event) {
      /* event.target az az elem, amelyik kiváltotta az eseményt */
      let id = event.target.id;
      console.log(id);
      const LISTA = torol(termekekLISTA, id);
      init(LISTA);
    });
}
