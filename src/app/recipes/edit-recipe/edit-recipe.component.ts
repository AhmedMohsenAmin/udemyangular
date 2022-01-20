import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, RouteConfigLoadEnd } from '@angular/router';

@Component({
  selector: 'app-edit-recipe',
  templateUrl: './edit-recipe.component.html',
  styleUrls: ['./edit-recipe.component.css']
})
export class EditRecipeComponent implements OnInit {
  id: number;
  editMode = false;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params
      .subscribe(
        (parms: Params) => {
          this.id = +parms['id'];
          this.editMode = parms['id'] != null;          
        }
      )
  }

}
