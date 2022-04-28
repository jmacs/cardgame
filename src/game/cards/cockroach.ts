import {Ability, Currency, Tribe} from '../enums';
import {createCardBlueprint} from '../card';

export default createCardBlueprint({
    name: 'Cockroach',
    title: 'Cockroach',
    power: 1,
    health: 1,
    tribes: [Tribe.Insect],
    cost: 4,
    currency: Currency.Bone,
    baseAbilities: [Ability.DrawCopyOnDeath]
});
