import {Ability, Currency, Tribe} from '../enums';
import {createCardBlueprint} from '../card';

export default createCardBlueprint({
    name: 'Magpie',
    title: 'Magpie',
    health: 1,
    power: 1,
    tribes: [Tribe.Avian],
    cost: 2,
    currency: Currency.Blood,
    baseAbilities: [
        Ability.Flying,
        Ability.Tutor,
    ],
});
