import { NgModule } from "@angular/core";
import { authComponents } from ".";
import { FormsModule } from "@angular/forms";
import { CommonModule } from '@angular/common';
import { AuthService } from "./auth.service";
import { SharedModule } from "../shared/shared.module";

@NgModule({
    declarations: [
        ...authComponents
    ],
    imports: [
        FormsModule,
        CommonModule,
        SharedModule
    ],
    providers: [
        AuthService
    ]
})
export class AuthModule {}