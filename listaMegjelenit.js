export function termekekOsszeallit(lista) {
  /* táblázatot állítok össze */
  let txt = "<table class='table table-striped'>"
  txt += "<thead><tr><th>Név</th><th>Márka</th><th></th></tr></thead>"
  txt+="<tbody>"
  lista.forEach((elem, index) => {
      /* a tábla egy sora */
      txt += `<tr>`;
      //console.log(elem)
      for (const kulcs in elem) {
          /* objektumokat járhatunk be */
          //console.log("kulcs: ", kulcs, elem[kulcs])
          txt += `<td>${elem[kulcs]}</td>`;
      }
      txt += `<td class='torol' id=${index}>❌</td>`;
      txt += `</tr>`;
  });
  txt += "<tbody></table>";
  return txt;
}

export function htmlOsszeallit(lista) {
  /* táblázatot állítok össze */
  let txt = "<table class='table table-striped'>"
  txt += "<thead><tr><th>Név</th><th>Márka</th><th></th></tr></thead>"
  txt+="<tbody>"
  lista.forEach((elem, index) => {
      /* a tábla egy sora */
      txt += `<tr>`;
      //console.log(elem)
      for (const kulcs in elem) {
          /* objektumokat járhatunk be */
          //console.log("kulcs: ", kulcs, elem[kulcs])
          txt += `<td>${elem[kulcs]}</td>`;
      }
      txt += `<td class = 'torol' id=${index}>🗑️</td>`;
      txt += `</tr>`;
  });
  txt += "<tbody></table>";
  return txt;
}
export function megjelenit(txt) {
  const divELEM = $(".adatok")
  divELEM.html(txt)
}

export function megjelenit(txt) {
  const divELEM = $(".adatok")
  divELEM.html(txt)
}