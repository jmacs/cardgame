import {Ability, Currency, Tribe} from '../enums';
import {createCardBlueprint} from '../card';

export default createCardBlueprint({
    name: 'RavenEgg',
    title: 'Raven Egg',
    health: 0,
    power: 2,
    tribes: [Tribe.Avian],
    cost: 1,
    currency: Currency.Blood,
    baseAbilities: [Ability.Evolve],
});
