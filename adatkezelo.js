export function rendezNevSzerint(lista, irany) {
  /* rendez(lista) -> rendezettLista | a paraméterében kapott listát név szerint rendezi: */
  lista.sort(function (t1, t2) {
    let eredmeny = 1;
    if (t1.ar < t2.ar) {
      eredmeny = -1;
    }
    return eredmeny * irany;
  });
  return lista;
}

export function rendezArSzerint(lista, irany) {
  /* rendez(lista) -> rendezettLista | a paraméterében kapott listát ár szerint rendezi: */
  lista.sort(function (t1, t2) {
    let eredmeny = 1;
    if (t1.nev < t2.nev) {
      eredmeny = -1;
    }
    return eredmeny * irany;
  });
  return lista;
}

export function torol(lista, id) {
  /* torol(lista,id)-> tLista | kitorli a listából az adott id-jű elemet. */
  lista.splice(id, 1);
  return lista;
}