import { Component, ElementRef, EventEmitter, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Ingrdiant } from "../../shared/Ingrediant.model";
import { ShoppingListService } from "../shopping-list.service";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit,OnDestroy {
  // @ViewChild('nameInput') nameInputRef : ElementRef;  we don't need it any more because w using forms
  // @ViewChild('amountInput') amountInputRef : ElementRef;
  /* this is an old code to add ingerdiant using event emit
    @Output() ingerdiantAdded = new EventEmitter<Ingrdiant>();
  */
  @ViewChild('f') slForm: NgForm;
  subscribtion: Subscription;
  editMode = false;
  editedindex: number;
  editedItem: Ingrdiant;

  constructor(private slService: ShoppingListService) { }

  ngOnInit(): void {
    this.subscribtion = this.slService.startEditing.subscribe(
      (index: number) => {
        this.editedindex = index;
        this.editMode = true;
        this.editedItem = this.slService.getIngeridiantByIndex(index);
        this.slForm.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount
        })
      }
    )
  }

  onAddItem(form: NgForm) {
    let formValue = form.value;
    const newIngerdiant = new Ingrdiant(formValue.name, formValue.amount);
    if (this.editMode) {
      this.slService.updateIngridant(this.editedindex, newIngerdiant);
    }
    else {
      this.slService.addNewIngeridiant(newIngerdiant);
    }
    form.reset();
    this.editMode=false;
    /* this is an old code to add ingerdiant using event emit
    this.ingerdiantAdded.emit(newIngerdiant);
    */
  }

  onRestForm(){
    this.slForm.reset();
    this.editMode = false;
  }

  onDelete(){
    if(this.editMode){
      this.slService.DeleteIngrdiant(this.editedindex);
    }
    this.onRestForm();
  }

  ngOnDestroy(): void {
      this.subscribtion.unsubscribe();
  }
}
