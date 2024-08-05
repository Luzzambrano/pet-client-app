/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './@core/core.module';
import { ThemeModule } from './@theme/theme.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {
  NbChatModule,
  NbDatepickerModule,
  NbDialogModule,
  NbMenuModule,
  NbSidebarModule,
  NbToastrModule,
  NbWindowModule,
} from '@nebular/theme';
import { GdcAppModule } from './gdc-app/gdc-app.module';
import { NbAuthModule } from '@nebular/auth';
import { NbPasswordAuthStrategy } from '@nebular/auth';
import { NbAuthJWTToken } from '@nebular/auth';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbDatepickerModule.forRoot(),
    NbDialogModule.forRoot(),
    NbWindowModule.forRoot(),
    NbToastrModule.forRoot(),
    NbChatModule.forRoot({
      messageGoogleMapKey: 'AIzaSyA_wNuCzia92MAmdLRzmqitRGvCF7wCZPY',
    }),
    NbAuthModule.forRoot({
      strategies: [
        NbPasswordAuthStrategy.setup({
          name: 'email',
          baseEndpoint: `${environment.gdcApiUrl}/auth`,
          token: {
            class: NbAuthJWTToken,
            key: 'accessToken',
          },
          login: {
            endpoint: '/authenticate',
            method: 'post',
            redirect: {
              success: '/gdcapp/dashboard',
              failure: null,
            },
          },
          register: {
            endpoint: '/register',
            method: 'post',
            redirect: {
              success: '/gdcapp/dashboard',
              failure: null,
            },
          },
          logout: {
            endpoint: '/logout',
            method: 'post',
            redirect: {
              success: '/auth/login',
              failure: null,
            },
          },
        }),
      ],
      forms: {
        login: {
          redirectDelay: 0,
          strategy: 'email',
          showMessages: {
            success: true,
          },
          socialLinks: [],
        },
        logout: {
          redirectDelay: 0,
          strategy: 'email',
        },
        validation: {
          password: {
            required: true,
            minLength: 4,
            maxLength: 50,
          },
          email: {
            required: true,
          },
        },
      },
    }),
    CoreModule.forRoot(),
    ThemeModule.forRoot(),
    GdcAppModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
