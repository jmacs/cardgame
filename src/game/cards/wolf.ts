import {Currency, Tribe} from '../enums';
import {createCardBlueprint} from '../card';

export default createCardBlueprint({
    name: 'Wolf',
    title: 'Wolf',
    health: 3,
    power: 2,
    tribes: [Tribe.Canine],
    cost: 2,
    currency: Currency.Blood,
});
