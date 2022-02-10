import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpaComponent } from './spa.component';
import { StoreModule } from '@ngrx/store';
import { spaReducer, SPA_REDUCER_NODE } from './store/spa_app/spa.reducer';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(SPA_REDUCER_NODE, spaReducer)
  ],
  declarations: [SpaComponent]
})
export class SpaModule { }
