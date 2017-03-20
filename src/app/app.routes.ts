import {Routes} from "@angular/router";
import {mainViewComponent} from "./views/main-view/main-view.component";
import {minorViewComponent} from "./views/minor-view/minor-view.component";
import {loginComponent} from "./views/login/login.component";
import {registerComponent} from "./views/register/register.component";
import {userComponent} from "./views/users/user.component";
import {blankComponent} from "./components/common/layouts/blank.component";
import {basicComponent} from "./components/common/layouts/basic.component";

import {verificacionComponent} from "./views/register/verificacion.component";
import {inviteComponent} from "./views/users/invite.component";
import {logoutComponent} from "./views/users/logout.component";

import {EnviosCreateComponent} from "./views/envios/envios.create.component";
import {perfilComponent} from "./views/users/perfil.component";



export const ROUTES:Routes = [
  // Main redirect
  {path: '', redirectTo: 'cliente.dashboard', pathMatch: 'full'},
  {
    path: 'cliente/logout',
    component: logoutComponent
  },
  // App views
  {
    path: 'cliente', component: basicComponent,
    children: [
      {path: 'dashboard', component: mainViewComponent},
      {path: 'minorView', component: minorViewComponent},
      {path: 'user', component: userComponent},
      {path: 'invited', component: inviteComponent},
      {path: 'envios', component: EnviosCreateComponent},
      {path: 'perfil', component: perfilComponent}
    ]
  },
  {
    path: 'cliente', component: blankComponent,
    children: [
      { path: 'login', component: loginComponent },
      { path: 'registrar', component: registerComponent },
      { path: 'verificacion', component: verificacionComponent }
    ]
  },
    {
    path: '', component: blankComponent,
    children: [
      
    ]
  },

  // Handle all other routes
  {path: '**',    component: mainViewComponent }
];
