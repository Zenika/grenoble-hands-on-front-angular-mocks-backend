import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllergenComponent } from './allergen.component';
import { AllergenRoutingModule } from '@views/allergen/allergen.routing.module';
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [
    AllergenComponent
  ],
  imports: [
    CommonModule,
    AllergenRoutingModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatPaginatorModule
  ]
})
export class AllergenModule { }
