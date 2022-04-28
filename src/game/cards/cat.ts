import {Ability, Currency} from '../enums';
import {createCardBlueprint} from '../card';

export default createCardBlueprint({
    name: 'Cat',
    title: 'Cat',
    health: 1,
    cost: 1,
    currency: Currency.Blood,
    baseAbilities: [Ability.Sacrificial],
    intrinsicAbilities: [Ability.CatSacrificeEvolution],
});
