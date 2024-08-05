import { NgModule } from '@angular/core';
import { GdcAuthModule } from './auth/auth.module';
import { GdcAppRoutingModule } from './gdc-app-routing.module';
import { GdcAppComponent } from './gdc-app.component';
import { ThemeModule } from '../@theme/theme.module';
import { NbMenuModule } from '@nebular/theme';
import { GdcComponentsModule } from './components/components.module';
import { GdcDashboardComponent } from './dashboard/dashboard.component';
import { GdcProductsComponent } from './products/products.component';

@NgModule({
  imports: [
    GdcAppRoutingModule,
    ThemeModule,
    NbMenuModule,
    GdcComponentsModule,
  ],
  exports: [GdcAuthModule, GdcComponentsModule],
  declarations: [GdcAppComponent, GdcDashboardComponent, GdcProductsComponent],
})
export class GdcAppModule {}
