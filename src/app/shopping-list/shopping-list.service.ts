import { Ingrdiant } from "../shared/Ingrediant.model";
import { EventEmitter } from "@angular/core";
import { Subject } from "rxjs";

export class ShoppingListService {
  //ingerdiantsChanged = new EventEmitter<Ingrdiant[]>();
  ingerdiantsChanged = new Subject<Ingrdiant[]>();
  startEditing = new Subject<number>();
  private ingrediants: Ingrdiant[] = [
    new Ingrdiant('First Item', 5),
    new Ingrdiant('Secounf Item', 10),
  ]

  getIngeridiants() {
    /**
     * this line will pass the data by referance
     * */
    /* return this.ingrediants;  */

    /**
     * this line will be call by value it will send a copy
     * */
    return this.ingrediants.slice();
  }
  /*
  because of using slice we have to let components know that we add new ingerdiatnt and i will do that using event Emitter
  * */
  addNewIngeridiant(ingerdiant: Ingrdiant) {
    this.ingrediants.push(ingerdiant);
    //this.ingerdiantsChanged.emit(this.ingrediants.slice()); if we use event emitter
    this.ingerdiantsChanged.next(this.ingrediants.slice());
  }

  addListOfIngerdiants(ingridants: Ingrdiant[]) {
    this.ingrediants.push(...ingridants);
    this.ingerdiantsChanged.next(this.ingrediants.slice())
  }

  getIngeridiantByIndex(index: number) {
    return this.ingrediants[index];
  }

  updateIngridant(index:number , newIngridant:Ingrdiant){
    this.ingrediants[index] = newIngridant;
    this.ingerdiantsChanged.next(this.ingrediants.slice());
  }

  DeleteIngrdiant(index:number){
    this.ingrediants.splice(index,1);
    this.ingerdiantsChanged.next(this.ingrediants.slice())
  }

}
