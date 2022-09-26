import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Mypipe } from 'src/mycustom.pipe';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    Mypipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
