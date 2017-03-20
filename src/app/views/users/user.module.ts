import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {userComponent} from "./user.component";
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [userComponent],
    imports     : [BrowserModule,ReactiveFormsModule],
})

export class UserModule {}