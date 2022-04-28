import {Ability, Currency, Tribe} from '../enums';
import {createCardBlueprint} from '../card';

export default createCardBlueprint({
    name: 'BloodHound',
    title: 'Blood Hound',
    health: 2,
    power: 3,
    tribes: [Tribe.Canine],
    cost: 2,
    currency: Currency.Blood,
    baseAbilities: [Ability.GuardDog]
});
