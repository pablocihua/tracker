import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {inviteComponent} from "./invite.component";
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [inviteComponent],
    imports     : [BrowserModule,ReactiveFormsModule],
})

export class InviteModule {}