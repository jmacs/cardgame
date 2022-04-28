import {Ability, Currency, Tribe, CardKind} from '../enums';
import {createCardBlueprint, RareCardBackgroundHref} from '../card';

export default createCardBlueprint({
    name: 'Ouroboros',
    title: 'Ouroboros',
    backgroundHref: RareCardBackgroundHref,
    kind: CardKind.Rare,
    tribes: [Tribe.Reptile],
    power: 1,
    health: 1,
    cloneable: false,
    cost: 2,
    currency: Currency.Blood,
    baseAbilities: [Ability.DrawCopyOnDeath],
    intrinsicAbilities: [Ability.Ouroboros],
});
