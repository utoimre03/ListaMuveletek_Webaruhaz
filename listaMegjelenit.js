export function termekekOsszeallit(lista) {
  let txt = "";
  txt += `<div class="container-fluid">`;
  txt += `<div class="row">`;
  for (let index = 0; index < lista.length; index++) {
    txt += `<div class="card col-md-4">`;
    txt += `<div class="card-header">${lista[index].nev}</div>`;
    txt += `<div id="termekek" class="text-center">`;
    txt += `<img src="${lista[index].kep}" alt="${lista[index].nev}">`;
    txt += `<p>${lista[index].ar}</p>`;
    txt += `<div><button class="gomb" id="${index}">Kosárba</button></div>`;
    txt += `</div>`;
    txt += `</div>`;
  }
  txt += `</div>`;
  txt += `</div>`;

  return txt;
}

export function kosarOsszeallit(lista) {
  let txt = "<table class='table table-striped'>";
  txt += "<thead><tr><th>Név</th><th>Kép</th><th>Ár</th><th></th></tr></thead>";
  txt += "<tbody>";
  lista.forEach((elem, index) => {
    txt += `<tr>`;
    for (const kulcs in elem) {
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