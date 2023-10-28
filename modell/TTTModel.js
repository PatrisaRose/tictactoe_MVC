class TTTModell {
  #lepes;
  #ertek = "";
  #lista = [];
  constructor() {
    this.#lepes = 0;
    this.n = 3;
    for (let index = 0; index < 9; index++) {
      this.#lista.push(".");
    }
  }

  aktualisAllapot(index) {
    this.#lepes++;
    if (this.#lepes % 2 == 0) {
      this.#ertek = "X";
    } else {
      this.#ertek = "O";
    }
    this.#lista[index] = this.#ertek;
    console.log(this.#lista);
    return this.#ertek;
  }

  #visszEll() {
    let szoveg = "";
    this.#lista.forEach((elem, i) => {
      szoveg += `${elem}`;
      if (i % this.n == this.n - 1) {
        szoveg += "@";
      }
    });
    console.log(szoveg);
    return szoveg;
  }
  #fuggEll() {
    let szoveg = "";

    return szoveg;
  }
  #atlEll() {
    let szoveg = "";
    console.log(szoveg);
    return szoveg;
  }

  ell() {
    let szoveg = this.#visszEll() + this.#fuggEll() + this.#atlEll();
    console.log(szoveg);
    console.log("szoveg.indexOf", szoveg.indexOf("XXX"));
    if (szoveg.indexOf("XXX") >= 0) {
      return 1;
    } else if (szoveg.indexOf("OOO") >= 0) {
      return 2;
    } else if (szoveg.indexOf(".") === -1) {
      return 3;
    } else {
      return 4;
    }
  }

  kovetkezoJatekos() {
    let kovJatekos = this.ell();
    if (kovJatekos === 4) {
      if (this.#lepes % 2 == 0) {
        kovJatekos = "O";
      } else {
        kovJatekos = "X";
      }
    }

    return kovJatekos;
  }
}
export default TTTModell;
