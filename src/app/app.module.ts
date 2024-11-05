import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SmsButtonComponent } from './Components/sms-button/sms-button.component';
import { SmsInputComponent } from './Components/sms-input/sms-input.component';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { FloatLabelModule } from 'primeng/floatlabel';
@NgModule({
  declarations: [
    AppComponent,
    SmsButtonComponent,
    SmsInputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InputTextModule,
    FormsModule,
    FloatLabelModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
