import {Component, Input, OnInit} from '@angular/core';
import template from './card.component.html';
import {Card} from '../../../game/card';
import {
    getCardCostHref,
    getTribeImageData,
    TribeImageData,
    AbilityImageData,
    getBaseAbilityImageData,
    getTransferredAbilityImageData
} from './card.component.utils';
import './card.component.scss';

@Component({
    template,
    selector: 'card',
})
export class CardComponent implements OnInit  {
    @Input() card: Card;
    @Input() className = '';

    idAttr: string;
    classAttr: string;
    tribeImageData: TribeImageData[];
    baseAbilityImageData: AbilityImageData[];
    transferredAbilityImageData: AbilityImageData[];
    currencyHref: string;

    ngOnInit() {
        const card = this.card;
        this.classAttr = `card ${this.className || ''}`;
        this.idAttr = `card_${card.name}_${card.id}`;
        this.currencyHref = getCardCostHref(card.currency, card.cost);
        this.tribeImageData = getTribeImageData(card.tribes);
        this.baseAbilityImageData = getBaseAbilityImageData(card.baseAbilities);
        this.transferredAbilityImageData = getTransferredAbilityImageData(
            card.transferredAbilities,
            card.baseAbilities.length > 0
        );
    }

}
