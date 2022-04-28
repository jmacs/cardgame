import {Ability, Currency, Tribe, CardKind} from '../enums';
import {createCardBlueprint, RareCardBackgroundHref} from '../card';

export default createCardBlueprint({
    name: 'LongElk',
    title: 'Long Elk',
    backgroundHref: RareCardBackgroundHref,
    kind: CardKind.Rare,
    tribes: [Tribe.Hooved],
    health: 1,
    power: 2,
    cost: 4,
    currency: Currency.Bone,
    baseAbilities: [
        Ability.DeathTouch,
        Ability.Strafe,
    ],
});
