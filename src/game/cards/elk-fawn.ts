import {Ability, Currency, Tribe} from '../enums';
import {createCardBlueprint} from '../card';

export default createCardBlueprint({
    name: 'ElkFawn',
    title: 'Elk Fawn',
    tribes: [Tribe.Hooved],
    health: 1,
    power: 1,
    cost: 1,
    currency: Currency.Blood,
    baseAbilities: [
        Ability.Strafe,
        Ability.Evolve
    ],
});
