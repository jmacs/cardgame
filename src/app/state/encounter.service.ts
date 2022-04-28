import {EncounterStore} from './encounter.store';
import {Injectable} from '@angular/core';
import {EncounterQuery} from './encounter.query';
import {Card} from '../../game/card';

@Injectable({providedIn: 'root'})
export class EncounterService {

    constructor(
        private encounterStore: EncounterStore,
        private encounterQuery: EncounterQuery,
    ) { }

    get query() {
        return this.encounterQuery;
    }

    getSlot(index: number) {
        return this.encounterStore.getValue().slots[index];
    }

    putCardInSlot(slotIndex: number, card: Card) {
        const state = this.encounterStore.getValue();
        const slots = state.slots.slice();
        slots[slotIndex] = {
            ...slots[slotIndex],
            card
        };
        this.encounterStore.update({slots});
    }

    removeCardFromSlot(slotIndex: number) {
        this.putCardInSlot(slotIndex, null);
    }

    updateCard(slotIndex: number, callback: (card: Card) => void) {
        const state = this.encounterStore.getValue();
        const card = state.slots[slotIndex].card;
        if (!card) {
            return;
        }
        callback(card);
        const slots = state.slots.slice();
        slots[slotIndex] = {
            ...slots[slotIndex],
            card,
        };
        this.encounterStore.update({slots});
    }

    setHand(hand: Card[]) {
        this.encounterStore.update({hand});
    }

}
