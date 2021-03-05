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
import { MaterialModule } from './material/material.module';
import { ManagerService} from './services/manager.service';

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
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    MaterialModule
  ],
  exports: [
    MaterialModule
  ],
  providers: [ManagerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
