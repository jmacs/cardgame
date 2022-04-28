import {Injectable} from '@angular/core';
import {Store, StoreConfig} from '@datorama/akita';
import {createEmptySlots, Slot} from '../../game/slot';
import {Card} from '../../game/card';

export type EncounterState = {
    slots: Slot[]
    mainDeck: Card[]
    sideDeck: Card[]
    hand: Card[]
    bones: number
    lives: number
    items: string[]
};

export function initialState(): EncounterState {
    return {
        slots: createEmptySlots(),
        mainDeck: [],
        sideDeck: [],
        hand: [],
        bones: 0,
        lives: 0,
        items: [],
    };
}

@Injectable({providedIn: 'root'})
@StoreConfig({name: 'encounter'})
export class EncounterStore extends Store<EncounterState> {
    constructor() {
        super(initialState());
    }
}
