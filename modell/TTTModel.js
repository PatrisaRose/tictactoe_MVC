class TTTModell {
  #lepes;
  #ertek = "";
  constructor() {
    this.#lepes = 0;
  }

  aktualisJatekos() {
    this.#lepes++;
    if (this.#lepes % 2 == 0) {
      this.#ertek = "X";
    } else {
      this.#ertek = "O";
    }
    return this.#ertek;
  }
  kovetkezoJatekos() {
    let kovJatekos;
    if (this.#lepes % 2 == 0) {
        kovJatekos = "O";
    } else {
        kovJatekos = "X";
    }
    return kovJatekos;
  }
}
export default TTTModell;
