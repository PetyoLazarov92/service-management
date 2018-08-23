import { NgModule } from "@angular/core";
import { authComponents } from ".";
import { FormsModule } from "@angular/forms";
import { CommonModule } from '@angular/common';
import { AuthService } from "./auth.service";
import { LoaderComponent } from '../shared/loader/loader.component';

@NgModule({
    declarations: [
        ...authComponents,
        LoaderComponent
    ],
    imports: [
        FormsModule,
        CommonModule
    ],
    exports: [
        LoaderComponent
    ],
    providers: [
        AuthService
    ]
})
export class AuthModule {}