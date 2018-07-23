import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LeftPaneComponent } from './components/left-pane/left-pane.component';

import { AngularSplitModule } from 'angular-split';
import { MonacoEditorModule } from 'ngx-monaco-editor';
import { FormsModule } from '@angular/forms';
import { ConsolePaneComponent } from './components/console-pane/console-pane.component';

import { InterpreterService } from './services/interpreter.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LeftPaneComponent,
    ConsolePaneComponent
  ],
  imports: [
    BrowserModule,
    AngularSplitModule,
    MonacoEditorModule.forRoot(),
    FormsModule
  ],
  providers: [
    InterpreterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
