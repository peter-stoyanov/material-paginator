import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
//import { MatPaginatorModule } from '@angular/material';
import { MatPaginatorModule } from './sp-paginator/';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { TableHttpExample } from './table-http-example/table-http-example';
import { MatTableModule, MatProgressSpinnerModule, MatSortModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports:      [ 
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatPaginatorModule,
    MatTableModule,
    MatProgressSpinnerModule,
    HttpClientModule,
    MatSortModule
  ],
  declarations: [ AppComponent, HelloComponent, TableHttpExample ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
