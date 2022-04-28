import {Injectable} from '@angular/core';
import {Query} from '@datorama/akita';
import {EncounterState, EncounterStore} from './encounter.store';

@Injectable({providedIn: 'root'})
export class EncounterQuery extends Query<EncounterState> {

    constructor(protected store: EncounterStore) {
        super(store);
    }

    selectSlot(index: number) {
        return this.select((state) => state.slots[index]);
    }

    selectPlayerHand() {
        return this.select((state) => state.hand);
    }
}
