import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SpaComponent } from './spa.component';
import { StoreModule } from '@ngrx/store';
import { spaReducer, SPA_REDUCER_NODE } from './store/spa_app/spa.reducer';
import { RouterModule } from '@angular/router';
import { AddUserComponent } from './page/add-user/add-user.component';
import { Create_userComponent } from './widget/create_user/create_user.component';
import { UserCreateFormComponent } from './ui/user-create-form/user-create-form.component';
import { UserListUiComponent } from './ui/user-list-ui/user-list-ui.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    StoreModule.forFeature(SPA_REDUCER_NODE, spaReducer),
    RouterModule.forChild([{
      path: '',
      component: AddUserComponent,
    }])
  ],
  declarations: [SpaComponent, Create_userComponent,
    AddUserComponent,
    UserCreateFormComponent,
    UserListUiComponent]
})
export class SpaModule { }
