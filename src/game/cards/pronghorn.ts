import {Ability, Currency, Tribe} from '../enums';
import {createCardBlueprint} from '../card';

export default createCardBlueprint({
    name: 'Pronghorn',
    title: 'Pronghorn',
    tribes: [Tribe.Hooved],
    power: 1,
    health: 3,
    cost: 2,
    currency: Currency.Blood,
    baseAbilities: [
        Ability.SplitStrike,
        Ability.Strafe,
    ],
});
