import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {EnviosCreateComponent} from "./envios.create.component";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
    declarations: [EnviosCreateComponent],
    imports     : [BrowserModule,ReactiveFormsModule],
})

export class EnviosCreateModule {}