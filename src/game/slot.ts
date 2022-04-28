import {Card} from './card';
import {Cursor, NumberOfSlots, SlotIndex} from './enums';
import {mapFor} from '../utils/arrays';

export type Slot = {
    index: SlotIndex
    card: Card
    cursor: Cursor,
};

export function createEmptySlots() {
    return mapFor<Slot>(NumberOfSlots, (index) => {
        return {
            index,
            cursor: Cursor.Default,
            card: null,
        };
    });
}
