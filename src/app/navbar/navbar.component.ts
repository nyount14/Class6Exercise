import { Component, EventEmitter, HostBinding, HostListener, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
searchinput = ""
@Output() SearchInput = new EventEmitter<string>();


  constructor() { }

  ngOnInit(): void {
  }


  onGetData() {
    this.SearchInput.emit(this.searchinput)
  }
}
