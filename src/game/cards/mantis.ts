import {Ability, Currency, Tribe} from '../enums';
import {createCardBlueprint} from '../card';

export default createCardBlueprint({
    name: 'Mantis',
    title: 'Mantis',
    health: 1,
    power: 1,
    tribes: [Tribe.Insect],
    cost: 1,
    currency: Currency.Blood,
    baseAbilities: [Ability.SplitStrike],
});
