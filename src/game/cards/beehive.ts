import {Ability, Currency, Tribe} from '../enums';
import {createCardBlueprint} from '../card';

export default createCardBlueprint({
    name: 'Beehive',
    title: 'Beehive',
    power: 0,
    health: 2,
    tribes: [Tribe.Insect],
    cost: 1,
    currency: Currency.Blood,
    baseAbilities: [Ability.BeesOnHit]
});
