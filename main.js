import { termekekLISTA } from "./adat.js";
import { termekekOsszeallit, megjelenit } from "./listaMegjelenit.js";

termekekLISTA();
termekekOsszeallit(lista);
megjelenit();

const tablazatELEM = $(".adatok");
tablazatELEM.html(termekekOsszeallit(lista));