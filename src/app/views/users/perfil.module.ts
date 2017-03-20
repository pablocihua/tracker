import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {logoutComponent} from "./logout.component";
import { ReactiveFormsModule } from '@angular/forms';
import { perfilComponent } from './perfil.component';

@NgModule({
    declarations: [perfilComponent],
    imports     : [BrowserModule,ReactiveFormsModule],
})

export class PerfilModule {}