import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {verificacionComponent} from "./verificacion.component";
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [verificacionComponent],
    imports     : [BrowserModule,ReactiveFormsModule],
})

export class VerificacionModule {}