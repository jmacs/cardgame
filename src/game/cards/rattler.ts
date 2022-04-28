import {Currency, Tribe} from '../enums';
import {createCardBlueprint} from '../card';

export default createCardBlueprint({
    name: 'Rattler',
    title: 'Rattler',
    power: 3,
    health: 1,
    tribes: [Tribe.Reptile],
    cost: 6,
    currency: Currency.Blood,
});
