import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'udemyangular';
  navigatedFeature = 'recipe';

  onNavigate(feature: string) {
    this.navigatedFeature = feature;
    console.log(feature);
  }
}
