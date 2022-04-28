import {CardKind, Currency} from '../enums';
import {createCardBlueprint} from '../card';

export default createCardBlueprint({
    name: 'Stoat',
    title: 'Stoat',
    health: 3,
    power: 1,
    cost: 1,
    currency: Currency.Blood,
    kind: CardKind.Special,
});
