import {Ability, Currency, Tribe, CardKind} from '../enums';
import {createCardBlueprint, RareCardBackgroundHref} from '../card';

export default createCardBlueprint({
    name: 'Child13',
    title: 'Child 13',
    backgroundHref: RareCardBackgroundHref,
    kind: CardKind.Rare,
    tribes: [Tribe.Hooved],
    health: 1,
    cost: 1,
    currency: Currency.Blood,
    baseAbilities: [Ability.Sacrificial],
    intrinsicAbilities: [Ability.Child13SacrificeEvolution],
});
