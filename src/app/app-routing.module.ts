import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TextConverterComponent} from './text-converter/text-converter.component';
import {AngleConverterComponent} from './value-converter/angle-converter/angle-converter.component';
import {DistanceConverterComponent} from './value-converter/distance-converter/distance-converter.component';
import {IntensityConverterComponent} from './value-converter/intensity-converter/intensity-converter.component';
import {LuminousConverterComponent} from './value-converter/luminous-converter/luminous-converter.component';
import {MassConverterComponent} from './value-converter/mass-converter/mass-converter.component';
import {SpeedConverterComponent} from './value-converter/speed-converter/speed-converter.component';
import {SubstanceConverterComponent} from './value-converter/substance-converter/substance-converter.component';
import {TimeConverterComponent} from './value-converter/time-converter/time-converter.component';
import {ItemGeneratorComponent} from './generator/item-generator/item-generator.component';
import {LetterGeneratorComponent} from './generator/letter-generator/letter-generator.component';
import {NumberGeneratorComponent} from './generator/number-generator/number-generator.component';
import {PasswordGeneratorComponent} from './generator/password-generator/password-generator.component';
import {TimeGeneratorComponent} from './generator/time-generator/time-generator.component';
import {VolumeConverterComponent} from './value-converter/volume-converter/volume-converter.component';
import {LoremGeneratorComponent} from './generator/lorem-generator/lorem-generator.component';
import {HomeComponent} from './home/home.component';

const routes: Routes = [{path: 'converter/text', component: TextConverterComponent},
                        {path: 'converter/angle', component: AngleConverterComponent},
                        {path: 'converter/distance', component: DistanceConverterComponent},
                        {path: 'converter/intensity', component: IntensityConverterComponent},
                        {path: 'converter/luminous-energy', component: LuminousConverterComponent},
                        {path: 'converter/mass', component: MassConverterComponent},
                        {path: 'converter/speed', component: SpeedConverterComponent},
                        {path: 'converter/substance-amount', component: SubstanceConverterComponent},
                        {path: 'converter/time', component: TimeConverterComponent},
                        {path: 'converter/volume', component: VolumeConverterComponent},
                        {path: 'generator/item', component: ItemGeneratorComponent},
                        {path: 'generator/letter', component: LetterGeneratorComponent},
                        {path: 'generator/lorem-ipsum', component: LoremGeneratorComponent},
                        {path: 'generator/number', component: NumberGeneratorComponent},
                        {path: 'generator/password', component: PasswordGeneratorComponent},
                        {path: 'generator/date', component: TimeGeneratorComponent},
                        {path: '', component: HomeComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
