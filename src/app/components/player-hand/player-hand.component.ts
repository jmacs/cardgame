import {Component, EventEmitter, Input, Output} from '@angular/core';
import template from './player-hand.component.html';
import {Card} from '../../../game/card';
import './player-hand.component.scss';

@Component({
    template,
    selector: 'player-hand',
})
export class PlayerHandComponent {
    @Input() cards: Card[];
    @Output() cardClick = new EventEmitter<Card>();

    onCardClick(card: Card) {
        this.cardClick.emit(card);
    }
}
