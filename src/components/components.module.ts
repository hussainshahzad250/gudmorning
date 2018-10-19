import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login';
import { RegisterComponent } from './register/register';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VendorDetailsComponent } from './vendor-details/vendor-details';
import { VendordataComponent } from './vendordata/vendordata';
import { VendortabComponent } from './vendortab/vendortab';
@NgModule({
	declarations: [
        LoginComponent,
        RegisterComponent,
    VendorDetailsComponent,
    VendordataComponent,
    VendortabComponent
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
    VendordataComponent,
    VendortabComponent
    ]
})
export class ComponentsModule {}
