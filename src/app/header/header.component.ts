import { Component, EventEmitter, Output } from "@angular/core";
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector:'app-header',
    templateUrl:'./header.component.html',
    styleUrls:['./header.component.css']
})
export class HeaderComponent {
    @Output() selecteFeature = new EventEmitter<string>();

    OnSelected(feature:string){
        this.selecteFeature.emit(feature);
    }
}