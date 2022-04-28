import {Tribe, CardKind} from '../enums';
import {createCardBlueprint, RareCardBackgroundHref} from '../card';

export default createCardBlueprint({
    name: 'Geck',
    title: 'Geck',
    backgroundHref: RareCardBackgroundHref,
    kind: CardKind.Rare,
    tribes: [Tribe.Reptile],
    power: 1,
    health: 1,
});
