import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CategoryComponent } from '@views/category/category.component';

const routes: Routes = [
  {
    path: '',
    component: CategoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryRoutingModule {}
