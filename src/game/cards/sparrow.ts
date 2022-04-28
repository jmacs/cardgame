import {Ability, Currency, Tribe} from '../enums';
import {createCardBlueprint} from '../card';

export default createCardBlueprint({
    name: 'Sparrow',
    title: 'Sparrow',
    health: 1,
    power: 2,
    tribes: [Tribe.Avian],
    cost: 1,
    currency: Currency.Blood,
    baseAbilities: [Ability.Flying],
});
