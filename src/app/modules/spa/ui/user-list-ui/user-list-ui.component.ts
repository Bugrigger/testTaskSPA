import { Component, Input, OnInit } from '@angular/core';
import { spa } from '../../model/spa';

@Component({
  selector: 'app-user-list-ui',
  templateUrl: './user-list-ui.component.html',
  styleUrls: ['./user-list-ui.component.css']
})
export class UserListUiComponent implements OnInit {



  @Input()
  public spaList: spa[] = [];

  constructor() { }

  ngOnInit() {
  }

}
