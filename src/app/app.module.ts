import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent, SettingsDialog } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    SettingsDialog
  ],
  entryComponents: [
    AppComponent,
    SettingsDialog
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
