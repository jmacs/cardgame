import {Component, OnInit} from '@angular/core';
import template from './encounter.screen.html';
import {EncounterService} from '../../state';
import {Observable} from 'rxjs';
import {Card} from '../../../game/card';
import './encounter.screen.scss';

@Component({
    template,
    selector: 'encounter-screen',
})
export class EncounterScreen implements OnInit  {
    hand$: Observable<Array<Card>>;

    constructor(private encounterService: EncounterService) {}

    ngOnInit() {
        this.hand$ = this.encounterService.query.selectPlayerHand();
    }

    onHandClick(card) {
        console.log('onHandClick');
        this.encounterService.initiatePlaceCard(card);
    }

    onBellClick() {
        this.encounterService.endTurn();
    }

}



