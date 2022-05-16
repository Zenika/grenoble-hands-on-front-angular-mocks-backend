import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'category',
    loadChildren: () => import('./views/category/category.module').then(m => m.CategoryModule)
  },
  {
    path: 'allergen',
    loadChildren: () => import('./views/allergen/allergen.module').then(m => m.AllergenModule)
  },
  { path: '', redirectTo: 'category', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    paramsInheritanceStrategy: 'always',
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
