import {Ability, Currency, Tribe} from '../enums';
import {createCardBlueprint} from '../card';

export default createCardBlueprint({
    name: 'StinkBug',
    title: 'Stink Bug',
    power: 1,
    health: 2,
    tribes: [Tribe.Insect],
    cost: 2,
    currency: Currency.Bone,
    baseAbilities: [Ability.DebuffEnemy],
});
