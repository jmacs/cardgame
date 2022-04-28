import {Ability, Currency, Tribe} from '../enums';
import {createCardBlueprint} from '../card';

export default createCardBlueprint({
    name: 'MooseBuck',
    title: 'Moose Buck',
    tribes: [Tribe.Hooved],
    power: 3,
    health: 7,
    cost: 3,
    currency: Currency.Blood,
    baseAbilities: [Ability.StrafePush],
});
