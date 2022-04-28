import {Observable} from 'rxjs';
import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {EncounterService} from '../../state';
import {Slot} from '../../../game/slot';
import template from './slot.component.html';

@Component({
    template,
    selector: 'slot',
})
export class SlotComponent implements OnInit  {
    @Input() index: number;
    @Input() variant: string;
    @Output() slotClick = new EventEmitter<Slot>();
    slot$: Observable<Slot>;

    constructor(private service: EncounterService) {}

    ngOnInit() {
        this.slot$ = this.service.query.selectSlot(this.index);
    }

    onClick() {
        const slot = this.service.getSlot(this.index);
        this.slotClick.emit({...slot});
    }

}
