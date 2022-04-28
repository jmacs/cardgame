import {Ability, Currency, Tribe} from '../enums';
import {createCardBlueprint} from '../card';

export default createCardBlueprint({
    name: 'BlackGoat',
    title: 'Black Goat',
    tribes: [Tribe.Hooved],
    health: 1,
    power: 0,
    cost: 1,
    currency: Currency.Blood,
    baseAbilities: [Ability.TripleBlood]
});
