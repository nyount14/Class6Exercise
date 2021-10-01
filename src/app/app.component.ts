import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  results: string[] = [];

  getSearchResult(content:string){
    this.results.push(content)
  }
}
