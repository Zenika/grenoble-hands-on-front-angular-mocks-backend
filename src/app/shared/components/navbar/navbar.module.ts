import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';



@NgModule({
  declarations: [
    NavbarComponent
  ],
  exports: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    MatDividerModule,
    MatListModule
  ]
})
export class NavbarModule { }
