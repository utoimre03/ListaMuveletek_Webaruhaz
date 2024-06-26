# Webáruház (terv)

## Specifikáció:
A felületen megjelenítünk 4 menüpontot (Termékeink, Kosár, Személyes adatok, Admin). Alatta hozunk létre 2 dolgot: egy rendezési fület és egy szűrési keresőt. Ezek alatt pár terméket helyezünk el (cardok), "Kosárba" gombbal mellékelve. 

### Publikus
A termékeket div-ekben jelenítjük meg (card-okat hozunk létre).
A termékeket kosárba lehet helyezni. A bent lévő termékeket lehet módosítani, törölni.

### Admin
A táblázat:
    - előtt beillesztünk egy szerkesztőt, amivel új adatokat tudunk bevinni a táblázatba.
    - sorait külön tudjuk törölni az utolsó oszlopban lévő "X"-szel --> "X" beillesztése
    - fejlécére kattintva tudjuk rendezni a rekordokat.

## Adatszerkezetek
termekekLISTA = [{}, {}] - itt vannak a megjelenített termékeink
kosarLISTA = [] - ide kerülnek a kosárba tett termékek

## Metódusok
1. **htmlOszeallit(lista) -> txt** | összeállítja a táblázat html szerkezetét egy szöveges változóba
2. **megjelenit(txt)** - megjeleníti egy adott html elemben a paraméterében kapott szöveget. 
3. **rendez(lista, irany) -> rendezettLista** | a paraméterében kapott listát név szerint megrendezi.
4. **adatHozzaadas(lista) -> kibovitettLista** | összegyűjti az űrlapról az adatokat és összeállít belőlük egy objektumot, majd azt beleteszi a listába; a függvény akkor fut le, ha rákattintunk a "Hozzáad" gombra. 
5. **torol(lista, id ) -> tLista** | kitörli a listából az adott id-jű elemet.
Akkor fog lefutni, ha sor melletti "Töröl" gombra kattintunk. 
6. **szures(lista, keresoSzoveg) -> szurtLista** | a keresőmezőbe beírt szöveget keresi a lista objektumainak név mezőjében; mindez akkor fut le, ha beírunk valamit a keresőmezőbe.
7. **kosarLista** | beleteszi egy listába az adott id-jű elemet
8. **kosarbaTesz(kosarLista, termekLista, id) -> kosarlista** | az adott terméket beleteszi a kosárlistába

### kosarEsemeny()
1. Minden div-ben van egy "Kosárba" gomb.
2. Amikor rákattintunk a "Kosárba" gombra, akkor lekérjük az indexet és a termekekLISTA indexedik elemét beletesszük a kosárba.
3. tablazatOsszeallit(kosarlista) --> megjelenítjük a kosár elemet.