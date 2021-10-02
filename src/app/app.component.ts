import { Component } from '@angular/core';
import { SearchResultsComponent } from './search-results/search-results.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
listofentries: string [] = [];

  SearchResults(result){
    this.listofentries.push(result)
    console.log(this.listofentries)
  }
}
