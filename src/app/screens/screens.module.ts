import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ComponentsModule} from '../components/components.module';
import {StateModule} from '../state/state.module';
import {EncounterScreen} from './encounter/encounter.screen';

const screens = [
    EncounterScreen,
];

@NgModule({
    imports: [
        CommonModule,
        ComponentsModule,
        StateModule,
    ],
    declarations: screens,
    exports: screens,
})
export class ScreensModule {}
