import TTTModell from "../modell/TTTModel.js";
import Jatekter from "../view/Jatekter.js";
import InfoView from "../view/InfoView.js";
class TTTController {
  constructor() {
    new Jatekter($(".jatekter"), 3);
    this.tttModell = new TTTModell();
    this.infoView = new InfoView($(".info"));


    $(window).on("elemKivalaszt", (event) => {
      //console.log(event.detail);
      /* itt hívom majd meg a modellt, hogy mondja meg hogy ki következik */
      let aktObj = event.detail;
      console.log(aktObj);
      let index = aktObj.index;
      console.log(index);
      let ertek = this.tttModell.aktualisAllapot(index);
      aktObj.setErtek(ertek);
      let kovja = this.tttModell.kovetkezoJatekos();
      this.infoView.setPelem(kovja);

  
    });
  }
}
export default TTTController;
