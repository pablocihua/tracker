import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {logoutComponent} from "./logout.component";
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [logoutComponent],
    imports     : [BrowserModule,ReactiveFormsModule],
})

export class LogoutModule {}