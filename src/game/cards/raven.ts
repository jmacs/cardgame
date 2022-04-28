import {Ability, Currency, Tribe} from '../enums';
import {createCardBlueprint} from '../card';

export default createCardBlueprint({
    name: 'Raven',
    title: 'Raven',
    health: 2,
    power: 3,
    tribes: [Tribe.Avian],
    cost: 2,
    currency: Currency.Blood,
    baseAbilities: [Ability.Flying],
});
