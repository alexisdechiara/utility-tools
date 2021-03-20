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
import {FormsModule} from '@angular/forms';
import { VolumeConverterComponent } from './value-converter/volume-converter/volume-converter.component';
import { MassConverterComponent } from './value-converter/mass-converter/mass-converter.component';
import { DistanceConverterComponent } from './value-converter/distance-converter/distance-converter.component';
import { SpeedConverterComponent } from './value-converter/speed-converter/speed-converter.component';
import { TimeConverterComponent } from './value-converter/time-converter/time-converter.component';
import { AngleConverterComponent } from './value-converter/angle-converter/angle-converter.component';
import { IntensityConverterComponent } from './value-converter/intensity-converter/intensity-converter.component';
import { SubstanceConverterComponent } from './value-converter/substance-converter/substance-converter.component';
import { LuminousConverterComponent } from './value-converter/luminous-converter/luminous-converter.component';
import { LoremGeneratorComponent } from './generator/lorem-generator/lorem-generator.component';
import { LetterGeneratorComponent } from './generator/letter-generator/letter-generator.component';
import { NumberGeneratorComponent } from './generator/number-generator/number-generator.component';
import { TimeGeneratorComponent } from './generator/time-generator/time-generator.component';
import { PasswordGeneratorComponent } from './generator/password-generator/password-generator.component';
import { ItemGeneratorComponent } from './generator/item-generator/item-generator.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    TextConverterComponent,
    ValueConverterComponent,
    GeneratorComponent,
    CalculatorComponent,
    VolumeConverterComponent,
    MassConverterComponent,
    DistanceConverterComponent,
    SpeedConverterComponent,
    TimeConverterComponent,
    AngleConverterComponent,
    IntensityConverterComponent,
    SubstanceConverterComponent,
    LuminousConverterComponent,
    LoremGeneratorComponent,
    LetterGeneratorComponent,
    NumberGeneratorComponent,
    TimeGeneratorComponent,
    PasswordGeneratorComponent,
    ItemGeneratorComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production}),
    MaterialModule,
    FormsModule
  ],
  exports: [
    MaterialModule
  ],
  providers: [ManagerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
