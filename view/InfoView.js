class InfoView {
  constructor(szuloElem) {
    this.szuloElem = szuloElem;
    this.#htmlosszeAllit();
    this.pElem = $(".info p");
  }
  setPelem(ertek) {
    this.pElem.html(ertek + " következik!");
  }
  #htmlosszeAllit() {
    let txt = "<p>Ki következik? </p>";
    this.szuloElem.html(txt);
  }
}
export default InfoView;
