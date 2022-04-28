import {Ability, Currency, Tribe} from '../enums';
import {createCardBlueprint} from '../card';

export default createCardBlueprint({
    name: 'Bullfrog',
    title: 'Bullfrog',
    tribes: [Tribe.Reptile],
    power: 1,
    health: 1,
    cost: 1,
    currency: Currency.Blood,
    baseAbilities: [Ability.Reach]
});
