import {Ability, Currency, Tribe} from '../enums';
import {createCardBlueprint} from '../card';

export default createCardBlueprint({
    name: 'CorpseMaggots',
    title: 'Corpse Maggots',
    power: 1,
    health: 2,
    tribes: [Tribe.Insect],
    cost: 5,
    currency: Currency.Bone,
    baseAbilities: [Ability.CorpseEater]
});
