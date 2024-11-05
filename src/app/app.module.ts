import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SmsButtonComponent } from './Components/sms-button/sms-button.component';
import { SmsInputComponent } from './Components/sms-input/sms-input.component';

@NgModule({
  declarations: [
    AppComponent,
    SmsButtonComponent,
    SmsInputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
