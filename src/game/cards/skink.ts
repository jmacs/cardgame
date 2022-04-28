import {Ability, Currency, Tribe} from '../enums';
import {createCardBlueprint} from '../card';

export default createCardBlueprint({
    name: 'Skink',
    title: 'Skink',
    tribes: [Tribe.Reptile],
    power: 1,
    health: 2,
    cost: 1,
    currency: Currency.Blood,
    baseAbilities: [Ability.TailOnHit],
});
