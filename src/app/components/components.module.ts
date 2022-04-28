import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BoardComponent} from './board/board.component';
import {CardComponent} from './card/card.component';
import {PlayerHandComponent} from './player-hand/player-hand.component';
import {PortalComponent} from './portal/portal.component';
import {StateModule} from '../state/state.module';
import {SlotComponent} from './board/slot.component';

const components = [
    BoardComponent,
    CardComponent,
    PlayerHandComponent,
    PortalComponent,
    SlotComponent,
];

@NgModule({
    imports: [
        CommonModule,
        StateModule,
    ],
    exports: components,
    declarations: components,
})
export class ComponentsModule {}
