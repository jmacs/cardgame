import {Ability, Currency, Tribe} from '../enums';
import {createCardBlueprint} from '../card';

export default createCardBlueprint({
    name: 'Adder',
    title: 'Adder',
    power: 1,
    health: 1,
    tribes: [Tribe.Reptile],
    cost: 2,
    currency: Currency.Blood,
    baseAbilities: [Ability.DeathTouch]
});
