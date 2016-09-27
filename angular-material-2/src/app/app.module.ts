import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MdButtonModule } from '@angular2-material/button';
import { MdCardModule } from '@angular2-material/card';
import { MdIconModule, MdIconRegistry } from '@angular2-material/icon';
import { MdButtonToggleModule } from '@angular2-material/button-toggle';
import { MdUniqueSelectionDispatcher } from '@angular2-material/core';
import { MdSidenavModule } from '@angular2-material/sidenav';
import { MdToolbarModule } from '@angular2-material/toolbar';
import { MdInputModule } from '@angular2-material/input';
import { MdTabsModule } from '@angular2-material/tabs';
import { MdGridListModule } from '@angular2-material/grid-list';
import { MdListModule } from '@angular2-material/list';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MdButtonModule,
    MdCardModule,
    MdIconModule,
    MdButtonToggleModule,
    MdSidenavModule,
    MdToolbarModule,
    MdInputModule,
    MdTabsModule,
    MdGridListModule,
    MdListModule
  ],
  providers: [
    MdIconRegistry,
    MdUniqueSelectionDispatcher
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
