import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-create-form',
  templateUrl: './user-create-form.component.html',
  styleUrls: ['./user-create-form.component.css']
})
export class UserCreateFormComponent implements OnInit {
  name = '';

  constructor() { }

  ngOnInit() {
  }

  onCreate(event: any) {

    if (this.name) {
      console.log(this.name);
    }


  }

}
