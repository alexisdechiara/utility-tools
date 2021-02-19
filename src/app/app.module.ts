import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { TextConverterComponent } from './text-converter/text-converter.component';
import { ValueConverterComponent } from './value-converter/value-converter.component';
import { GeneratorComponent } from './generator/generator.component';
import { CalculatorComponent } from './calculator/calculator.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

const MaterialComponents = [
  MatToolbarModule,
  MatIconModule,
  MatButtonModule
];

@NgModule({
  declarations: [
    AppComponent,
    TextConverterComponent,
    ValueConverterComponent,
    GeneratorComponent,
    CalculatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialComponents,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  exports: [
    MaterialComponents
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
