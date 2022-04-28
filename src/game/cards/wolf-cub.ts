import {Ability, Currency, Tribe} from '../enums';
import {createCardBlueprint} from '../card';

export default createCardBlueprint({
    name: 'WolfCub',
    title: 'Wolf Cub',
    health: 1,
    power: 1,
    tribes: [Tribe.Canine],
    cost: 1,
    currency: Currency.Blood,
    baseAbilities: [Ability.Evolve],
});
