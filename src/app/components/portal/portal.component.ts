import {Component, Input} from '@angular/core';
import template from './portal.component.html';
import {Card} from '../../../game/card';
import './portal.component.scss';
import {Cursor} from '../../../game/enums';

@Component({
    template,
    selector: 'portal',
})
export class PortalComponent  {
    @Input() card: Card;
    @Input() cursor: Cursor;

    get cardFace() {
        return this.card ? this.card.face : null;
    }

}
