import { NgModule, Provider, Injectable, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, RequestOptions, Headers, XHRBackend, Http  }     from '@angular/http';
import { HttpService } from './services/http.service';

import { PolymerElement } from '@vaadin/angular2-polymer';

import {RouterModule} from "@angular/router";
import {LocationStrategy, HashLocationStrategy} from '@angular/common';

import {ROUTES} from "./app.routes";
import { AppComponent } from './app.component';

//import {LoginComponent} from './views/login/login.component';

/* Third Party Libraries */
import { LocalStorageService, LocalStorageSubscriber } from 'angular2-localstorage/LocalStorageEmitter';
import { LocalStorage, SessionStorage } from "angular2-localstorage/WebStorage";
import { Ng2UploaderModule } from 'ng2-uploader/ng2-uploader';

// App views
import {MainViewModule} from "./views/main-view/main-view.module";
import {MinorViewModule} from "./views/minor-view/minor-view.module";
import {LoginModule} from "./views/login/login.module";
import {RegisterModule} from "./views/register/register.module";
import {UserModule} from "./views/users/user.module";
import {InviteModule} from "./views/users/invite.module";
import {EnviosCreateModule} from "./views/envios/envios.create.module";
import {PerfilModule} from "./views/users/perfil.module";

import {VerificacionModule} from "./views/register/verificacion.module";
// App modules/components
import {LayoutsModule} from "./components/common/layouts/layouts.module";
import {LogoutModule} from "./views/users/logout.module";
import { JsonApiModule } from 'angular2-jsonapi';
import { ModalModule } from 'angular2-modal';
import { BootstrapModalModule } from 'angular2-modal/plugins/bootstrap';
/* Services */
import { UserService }    from './services/user.service';
import { TokenService }   from './services/token.service';

@Injectable()
export class VethubOptions extends RequestOptions {
  
  constructor(private tokenService: TokenService) {
    super();
  }

  merge(options): RequestOptions {
    
    if(options.body === null) //patch remove in angular final version
      options.body = '';

    options.headers = new Headers({
      'Content-Type': 'application/json',
      'Token': this.tokenService.user.token_access 
   
    });

    return super.merge(options);
  }

}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    // Angular modules
    JsonApiModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    ModalModule.forRoot(),
    BootstrapModalModule,
    // Views
    MainViewModule,
    MinorViewModule,
    LoginModule,
    RegisterModule,
    UserModule,
    VerificacionModule,
    InviteModule,
    LogoutModule,
    EnviosCreateModule,
    PerfilModule,
    // Modules
    LayoutsModule,

    RouterModule.forRoot(ROUTES)
  ],
    bootstrap: [ AppComponent ],
  providers: [UserService, TokenService, LocalStorageService,
      { provide: RequestOptions, useClass: VethubOptions },
      { provide: Http, useFactory: (backend: XHRBackend, options: RequestOptions) => {
        return new HttpService(backend, options);
      }, deps: [XHRBackend, RequestOptions]}],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule {}
