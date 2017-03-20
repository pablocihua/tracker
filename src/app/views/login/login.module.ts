import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {loginComponent} from "./login.component";
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [loginComponent],
    imports     : [BrowserModule,ReactiveFormsModule],
})

export class LoginModule {}