import {Currency, Tribe} from '../enums';
import {createCardBlueprint} from '../card';

export default createCardBlueprint({
    name: 'RiverSnapper',
    title: 'River Snapper',
    power: 1,
    health: 6,
    tribes: [Tribe.Reptile],
    cost: 2,
    currency: Currency.Blood,
});
