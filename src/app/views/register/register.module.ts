import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {registerComponent} from "./register.component";
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [registerComponent],
    imports     : [BrowserModule,ReactiveFormsModule],
})

export class RegisterModule {}