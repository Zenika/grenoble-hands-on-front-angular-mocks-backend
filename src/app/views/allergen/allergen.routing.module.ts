import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AllergenComponent } from '@views/allergen/allergen.component';

const routes: Routes = [
  {
    path: '',
    component: AllergenComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AllergenRoutingModule {}
