import { Component, HostBinding, HostListener, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {
  // use @Input to take in values from the app component
  @Input('inputResults') results:string[] = [];
  
  constructor() { }

  ngOnInit(): void {
  }
}
