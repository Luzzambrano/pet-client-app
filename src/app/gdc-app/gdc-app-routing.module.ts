import { NgModule } from '@angular/core';
import { Router, Routes, RouterModule } from '@angular/router';
import { GdcDashboardComponent } from './dashboard/dashboard.component';
import { GdcAppComponent } from './gdc-app.component';
import { GdcProductsComponent } from './products/products.component';
export const routes: Routes = [
  {
    path: '',
    component: GdcAppComponent,
    children: [
      {
        path: 'dashboard',
        component: GdcDashboardComponent,
      },
      {
        path: 'products',
        component: GdcProductsComponent,
      },
    ],
  },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GdcAppRoutingModule {}