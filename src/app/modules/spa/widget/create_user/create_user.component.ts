import { Component, OnInit, } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { spa } from '../../model/spa';
import { spaCreateUser } from '../../store/spa_app/spa.actions';
import { SpaState } from '../../store/spa_app/spa.reducer';
import { spaListSelector } from '../../store/spa_app/spa.selectors';

@Component({
  selector: 'app-create_user',
  templateUrl: './create_user.component.html',
  styleUrls: ['./create_user.component.css']
})
export class Create_userComponent implements OnInit {

  spaList$: Observable<spa[]> = this.store$.pipe(select(spaListSelector));

  constructor(private store$: Store<SpaState>) { }

  ngOnInit() {
  }

  onCreate(name: string) {
    console.log(name);
    this.store$.dispatch(new spaCreateUser({ name }));

  }



}
