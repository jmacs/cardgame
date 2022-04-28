import {CardKind} from '../enums';
import {createCardBlueprint, TerrainCardBackgroundHref} from '../card';

export default createCardBlueprint({
    name: 'GoldenPelt',
    title: 'Golden Pelt',
    kind: CardKind.Pelt,
    backgroundHref: TerrainCardBackgroundHref,
    health: 3,
});
