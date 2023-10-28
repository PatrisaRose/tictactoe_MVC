class InfoView {
  constructor(szuloElem) {
    this.szuloElem = szuloElem;
    this.#htmlosszeAllit();
    this.pElem = $(".info p");
  }
  setPelem(ertek) {
    let szoveg = "";
    switch (ertek) {
      case 1:
        szoveg = "X nyert";
        break;
      case 2:
        szoveg = "O nyert";
        break;
      case 3:
        szoveg = "Döntetlen";
        break;
      case "X":
      case "O":
        szoveg = ertek + " következik";
        break;
    }
    this.pElem.html(szoveg);
  }
  #htmlosszeAllit() {
    let txt = "<p>Ki következik? </p>";
    this.szuloElem.html(txt);
  }
}
export default InfoView;
