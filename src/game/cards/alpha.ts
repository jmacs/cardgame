import {Currency, Tribe, Ability} from '../enums';
import {createCardBlueprint} from '../card';

export default createCardBlueprint({
    name: 'Alpha',
    title: 'Alpha',
    health: 1,
    power: 2,
    tribes: [Tribe.Canine],
    cost: 5,
    currency: Currency.Bone,
    baseAbilities: [Ability.BuffNeighbours]
});
