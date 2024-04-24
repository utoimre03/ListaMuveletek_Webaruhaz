import { htmlOsszeallit } from "./listaMegjelenit.js";

function szuresEsemeny() {
    /* akkor kell lefutnia, ha megváltozik a keresőmező tartalma */
    const keresoELEM = $("#szuro");
    keresoELEM.on("keyup", function () {
      let keresoSzoveg = keresoELEM.val();
      const szLISTA = szures(emberekLISTA, keresoSzoveg);
      init(szLISTA);
    });
  } 