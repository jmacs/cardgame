import {CardKind} from '../enums';
import {createCardBlueprint, TerrainCardBackgroundHref} from '../card';

export default createCardBlueprint({
    name: 'RabbitPelt',
    title: 'Rabbit Pelt',
    kind: CardKind.Pelt,
    backgroundHref: TerrainCardBackgroundHref,
    health: 1,
});
