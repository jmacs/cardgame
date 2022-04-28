import {CardKind} from '../enums';
import {createCardBlueprint, TerrainCardBackgroundHref} from '../card';

export default createCardBlueprint({
    name: 'WolfPelt',
    title: 'Wolf Pelt',
    kind: CardKind.Pelt,
    backgroundHref: TerrainCardBackgroundHref,
    health: 2,
});
