import {Ability, Currency, Tribe} from '../enums';
import {createCardBlueprint} from '../card';

export default createCardBlueprint({
    name: 'KingFisher',
    title: 'KingFisher',
    health: 1,
    power: 1,
    tribes: [Tribe.Avian],
    cost: 1,
    currency: Currency.Blood,
    baseAbilities: [
        Ability.Flying,
        Ability.Submerge,
    ],
});
