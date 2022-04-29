import {Component, EventEmitter, Input, Output} from '@angular/core';
import template from './bell.component.html';
import './bell.component.scss';

@Component({
    template,
    selector: 'bell',
})
export class BellComponent {
    @Input() disabled = false;
    @Output() bellClick = new EventEmitter<void>();

    onClick() {
        if (!this.disabled) {
            this.bellClick.emit();
        }
    }

}
