export function muszakiOsszeallit(lista) {
    /* táblázatot állítok össze */
    let txt = "<div class='card'>";
    txt += "<div class='card-header'>Header</div>
      <div class='card-body'>Content</div><div class='card-footer'>Footer</div>";
    txt += "<tbody>";
    lista.forEach((elem, index) => {
      /* a tábla egy sora */
      txt += `<tr>`;
  
      for (const kulcs in elem) {
        /* objektumokat járhatunk be */
        //console.log("kulcs: ", kulcs, elem[kulcs]);
        txt += `<td>${elem[kulcs]}</td>`;
      }
      txt += `<td class='torol' id=${index}>🗑️</td>`;
      txt += `</tr>`;
    });
    txt += "</tbody></table>";
    return txt;
  }
  export function megjelenit(txt) {
    const divELEM = $(".adatok");
    divELEM.html(txt);
  }
  
  