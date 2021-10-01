import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  search:string = "";
  //  Use Event emitter to trigger an event and use @Output to pass the value of search to the app component
  @Output('outputSearch') searching = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  onSearch(){
    //  emit an event
    this.searching.emit(this.search)
    console.log(this.search);
  }
}
