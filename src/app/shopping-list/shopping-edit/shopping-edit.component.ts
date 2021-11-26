import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Ingrdiant} from "../../shared/Ingrediant.model";
import {ShoppingListService} from "../shopping-list.service";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef : ElementRef;
  @ViewChild('amountInput') amountInputRef : ElementRef;
  /* this is an old code to add ingerdiant using event emit
    @Output() ingerdiantAdded = new EventEmitter<Ingrdiant>();
  */
    constructor(private slService:ShoppingListService) { }

    ngOnInit(): void {
    }

    onAddItem(){
      const ingName = this.nameInputRef.nativeElement.value;
      const ingAmount = this.amountInputRef.nativeElement.value;
      const newIngerdiant = new Ingrdiant(ingName,ingAmount);
      this.slService.addNewIngeridiant(newIngerdiant);
      /* this is an old code to add ingerdiant using event emit
      this.ingerdiantAdded.emit(newIngerdiant);
      */
  }

}
