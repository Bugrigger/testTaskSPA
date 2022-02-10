import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-user-create-form',
  templateUrl: './user-create-form.component.html',
  styleUrls: ['./user-create-form.component.css']
})
export class UserCreateFormComponent implements OnInit {
  name = '';

  @Output()
  create = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onCreate(event: any) {

    if (this.name) {
      this.create.emit(this.name);
      this.name = '';
    }


  }

}
