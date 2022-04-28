import {Ability, Currency, Tribe} from '../enums';
import {createCardBlueprint, RareCardBackgroundHref} from '../card';

export default createCardBlueprint({
    name: 'StrangeLarva',
    title: 'Strange Larva',
    power: 0,
    health: 3,
    backgroundHref: RareCardBackgroundHref,
    tribes: [Tribe.Insect],
    cost: 1,
    currency: Currency.Blood,
    baseAbilities: [Ability.Evolve],
});
