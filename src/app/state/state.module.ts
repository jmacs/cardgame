import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EncounterService} from './encounter.service';
import {EncounterQuery} from './encounter.query';
import {EncounterStore} from './encounter.store';

@NgModule({
    imports: [
        CommonModule,
    ],
    providers: [
        EncounterService,
        EncounterQuery,
        EncounterStore,
    ]
})
export class StateModule {}
