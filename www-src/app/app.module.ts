import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatRadioModule} from '@angular/material/radio';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuizComponent } from './component/quiz/quiz.component';

@NgModule({
  declarations: [
    AppComponent,
    QuizComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    //NoopAnimationsModule,
    //MatRadioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
