import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavigatorComponent } from './navigator/navigator.component';
import { FooterComponent } from './footer/footer.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { JoinmeetComponent } from './joinmeet/joinmeet.component';
import { ImagrSliderComponent } from './imagr-slider/imagr-slider.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigatorComponent,
    FooterComponent,
    ContactFormComponent,
    JoinmeetComponent,
    ImagrSliderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
