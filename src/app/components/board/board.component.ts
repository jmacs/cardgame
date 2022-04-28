import './board.component.scss';
import {Component, OnInit} from '@angular/core';
import BoardComponentHtml from './board.component.html';
import {EncounterService} from '../../state';
import {Slot} from '../../../game/slot';

@Component({
    selector: 'board',
    template: BoardComponentHtml,
})
export class BoardComponent implements OnInit  {

    constructor(private encounterService: EncounterService) {}

    ngOnInit() {

    }

    onSlotClick(slot: Slot) {
        console.log('onSlotClick', slot);
    }
}
