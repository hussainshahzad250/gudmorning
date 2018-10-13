import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login';
import { RegisterComponent } from './register/register';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VendorDetailsComponent } from './vendor-details/vendor-details';
import { VendordataComponent } from './vendordata/vendordata';
@NgModule({
	declarations: [
        LoginComponent,
        RegisterComponent,
    VendorDetailsComponent,
    VendordataComponent
    ],
	imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule
    ],
	exports: [
        LoginComponent,
        RegisterComponent,
    VendorDetailsComponent,
    VendordataComponent
    ]
})
export class ComponentsModule {}
