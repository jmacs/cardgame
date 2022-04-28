import {Ability, Currency, Tribe} from '../enums';
import {createCardBlueprint} from '../card';

export default createCardBlueprint({
    name: 'Elk',
    title: 'Elk',
    tribes: [Tribe.Hooved],
    power: 2,
    health: 3,
    cost: 2,
    currency: Currency.Blood,
    baseAbilities: [Ability.Strafe]
});
