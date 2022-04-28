import {Ability, Currency, Tribe, CardKind} from '../enums';
import {createCardBlueprint, RareCardBackgroundHref} from '../card';

export default createCardBlueprint({
    name: 'MantisGod',
    title: 'Mantis God',
    backgroundHref: RareCardBackgroundHref,
    kind: CardKind.Rare,
    health: 1,
    power: 1,
    tribes: [Tribe.Insect],
    cost: 1,
    currency: Currency.Blood,
    baseAbilities: [Ability.TriStrike],
});
